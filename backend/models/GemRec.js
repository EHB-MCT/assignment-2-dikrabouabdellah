const mongoose = require("mongoose");

const gemRecSchema = new mongoose.Schema({
	grid: String,
	name: String,
	genre: String,
	aired: String,
	score: Number,
	episode: Number,
	GemRec: String,
	summary: String,
	image: String,
	watch: String,
	date: String,
});

module.exports = mongoose.model("GemRec", gemRecSchema, "GemRecs");
