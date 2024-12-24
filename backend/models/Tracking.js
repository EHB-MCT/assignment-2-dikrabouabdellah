const mongoose = require("mongoose");

// Define the schema for the tracking data
const trackingSchema = new mongoose.Schema({
	eventType: String,
	timestamp: Date,
	page: String,
	scrollDepth: Number,
	buttonName: String,
});

const Tracking = mongoose.model("Tracking", trackingSchema);

module.exports = Tracking;
