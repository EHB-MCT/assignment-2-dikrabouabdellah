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

// Route to get the aggregated data for page views
router.get("/aggregate/page-views", async (req, res) => {
	try {
		const pageViews = await Tracking.aggregate([{ $match: { eventType: "page-load" } }, { $group: { _id: "$page", count: { $sum: 1 } } }, { $sort: { count: -1 } }]);

		res.status(200).json(pageViews);
	} catch (error) {
		console.error("Error aggregating data:", error);
		res.status(500).send("Error aggregating data");
	}
});

// Route to get aggregated button clicks
router.get("/aggregate/button-clicks", async (req, res) => {
	try {
		const buttonClicks = await Tracking.aggregate([{ $match: { eventType: "click" } }, { $group: { _id: "$buttonName", count: { $sum: 1 } } }, { $sort: { count: -1 } }]);

		res.status(200).json(buttonClicks);
	} catch (error) {
		console.error("Error aggregating data:", error);
		res.status(500).send("Error aggregating data");
	}
});

// Route to get aggregated scroll depth
router.get("/aggregate/scroll-depth", async (req, res) => {
	try {
		const scrollDepths = await Tracking.aggregate([
			{ $match: { eventType: "scroll-depth" } },
			{ $group: { _id: "$scrollDepth", count: { $sum: 1 } } },
			{ $sort: { _id: 1 } }, // Sort by scroll depth percentage
		]);

		res.status(200).json(scrollDepths);
	} catch (error) {
		console.error("Error aggregating data:", error);
		res.status(500).send("Error aggregating data");
	}
});

// Route to get overall event counts by event type
router.get("/aggregate/event-types", async (req, res) => {
	try {
		const eventCounts = await Tracking.aggregate([{ $group: { _id: "$eventType", count: { $sum: 1 } } }, { $sort: { count: -1 } }]);

		res.status(200).json(eventCounts);
	} catch (error) {
		console.error("Error aggregating data:", error);
		res.status(500).send("Error aggregating data");
	}
});

module.exports = router;
