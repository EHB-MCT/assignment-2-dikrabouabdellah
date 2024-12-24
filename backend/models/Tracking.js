const mongoose = require("mongoose");

// Define the schema for the tracking data
const trackingSchema = new mongoose.Schema({
	eventType: {
		type: String,
		required: true, // page-load, scroll-depth
	},
	timestamp: {
		type: Date,
		required: true,
	},
	page: {
		type: String,
		required: true, // Homepage, gemrec page, etc.
	},
	scrollDepth: {
		type: Number,
		required: false, // This will only be set for scroll-depth events
	},
});

const Tracking = mongoose.model("Tracking", trackingSchema);

module.exports = Tracking;
