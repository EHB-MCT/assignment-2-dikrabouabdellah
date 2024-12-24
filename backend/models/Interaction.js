const mongoose = require("mongoose");

const interactionSchema = new mongoose.Schema({
	grid: { type: String, required: false },
	interactionType: { type: String, required: true },
	timestamp: { type: Date, default: Date.now },
	page: { type: String, required: true },
	additionalInfo: {
		type: Object,
		default: {},
	},
});

module.exports = mongoose.model("Interaction", interactionSchema);
