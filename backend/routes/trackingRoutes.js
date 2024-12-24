const express = require("express");
const router = express.Router();
const Tracking = require("./../models/Tracking.js");

// Endpoint to handle tracking data (page load, scroll depth, etc.)
router.post("/track", async (req, res) => {
	try {
		const { eventType, timestamp, page, scrollDepth, buttonName } = req.body;
		console.log("Received interaction data:", { eventType, timestamp, page, scrollDepth, buttonName });

		// Create a new tracking entry in the database
		const trackingData = new Tracking({
			eventType,
			timestamp,
			page,
			scrollDepth,
			buttonName,
		});

		// Save the tracking data
		await trackingData.save();
		res.status(200).send("Tracking data saved successfully");
	} catch (error) {
		console.error("Error saving tracking data:", error);
		res.status(500).send("Error saving tracking data");
	}
});

// route to get the aggregated data for page views
router.get("/aggregate/page-views", async (req, res) => {
	try {
		// Aggregating page views by page
		const pageViews = await Tracking.aggregate([
			{
				$match: { eventType: "page-load" },
			},
			{
				$group: {
					_id: "$page", // Group by page
					count: { $sum: 1 }, // Count occurrences
				},
			},
			{
				$sort: { count: -1 }, // Sort by highest count
			},
		]);

		res.status(200).json(pageViews);
	} catch (error) {
		console.error("Error aggregating data:", error);
		res.status(500).send("Error aggregating data");
	}
});

// route to get aggregated button clicks
router.get("/aggregate/button-clicks", async (req, res) => {
	try {
		// Aggregating button clicks by button name
		const buttonClicks = await Tracking.aggregate([
			{
				$match: { eventType: "click" },
			},
			{
				$group: {
					_id: "$buttonName",
					count: { $sum: 1 },
				},
			},
			{
				$sort: { count: -1 },
			},
		]);

		res.status(200).json(buttonClicks);
	} catch (error) {
		console.error("Error aggregating data:", error);
		res.status(500).send("Error aggregating data");
	}
});

module.exports = router;
