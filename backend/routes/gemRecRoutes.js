const express = require("express");
const router = express.Router();
const Anime = require("../models/GemRec.js");
const GemRec = require("../models/GemRec.js");

// GET all anime recommendations
router.get("/", async (req, res) => {
	console.log("GET /api/gemrecs - Fetching all GemRecs");
	try {
		const gemRecs = await GemRec.find();
		console.log("GemRec data fetched:", gemRecs);
		res.json(gemRecs);
	} catch (err) {
		console.error("Error fetching GemRecs:", err);
		res.status(500).json({ message: err.message });
	}
});

// GET only Gem Recommendations
router.get("/gems", async (req, res) => {
	try {
		const gems = await GemRec.find({ GemRec: "yes" });
		res.json(gems);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
