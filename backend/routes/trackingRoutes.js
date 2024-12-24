const express = require("express");
const router = express.Router();
const Tracking = require("./../models/Tracking.js");

// Endpoint to handle tracking data (page load, scroll depth, etc.)
router.post("/track", async (req, res) => {
	try {
		const { eventType, timestamp, page, scrollDepth } = req.body;

		// Create a new tracking entry in the database
		const trackingData = new Tracking({
			eventType,
			timestamp,
			page,
			scrollDepth,
		});

		// Save the tracking data
		await trackingData.save();
		res.status(200).send("Tracking data saved successfully");
	} catch (error) {
		console.error("Error saving tracking data:", error);
		res.status(500).send("Error saving tracking data");
	}
});

module.exports = router;
