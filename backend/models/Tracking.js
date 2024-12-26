const mongoose = require("mongoose");

const trackingSchema = new mongoose.Schema({
	eventType: String,
	timestamp: Date,
	page: String,
	scrollDepth: Number,
	buttonName: String,
});

const Tracking = mongoose.model("Tracking", trackingSchema);

module.exports = Tracking;
