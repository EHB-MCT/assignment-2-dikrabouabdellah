const express = require("express");
const router = express.Router();
const Tracking = require("./../models/Tracking.js");

// Route to handle tracking data (page load, scroll depth, etc.)
router.post("/track", async (req, res) => {
	try {
		const { eventType, timestamp, page, scrollDepth, buttonName } = req.body;
		console.log("Received interaction data:", { eventType, timestamp, page, scrollDepth, buttonName });

		const trackingData = new Tracking({
			eventType,
			timestamp,
			page,
			scrollDepth,
			buttonName,
		});

		await trackingData.save();
		res.status(200).send("Tracking data saved successfully");
	} catch (error) {
		console.error("Error saving tracking data:", error);
		res.status(500).send("Error saving tracking data");
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
		const scrollDepths = await Tracking.aggregate([{ $match: { eventType: "scroll-depth" } }, { $group: { _id: "$scrollDepth", count: { $sum: 1 } } }, { $sort: { _id: 1 } }]);

		res.status(200).json(scrollDepths);
	} catch (error) {
		console.error("Error aggregating data:", error);
		res.status(500).send("Error aggregating data");
	}
});

// Route to get aggregated hovers
router.get("/aggregate/button-hovers", async (req, res) => {
	try {
		const hovers = await Tracking.aggregate([{ $match: { eventType: "hover" } }, { $group: { _id: "$buttonName", count: { $sum: 1 } } }, { $sort: { count: -1 } }]);
		res.json(hovers);
	} catch (error) {
		console.error("Error fetching button hovers:", error);
		res.status(500).send("Internal Server Error");
	}
});

module.exports = router;
