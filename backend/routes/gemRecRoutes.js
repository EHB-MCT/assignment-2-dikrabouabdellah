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

// GET one GemRec by ID
router.get("/:grid", async (req, res) => {
	const grid = req.params.grid;
	console.log("Fetching GemRec with grid:", grid);

	try {
		const gemRec = await GemRec.findOne({ grid });
		if (!gemRec) {
			console.log("GemRec not found for grid:", grid);
			return res.status(404).json({ message: "GemRec not found" });
		}
		res.json(gemRec);
	} catch (error) {
		console.error("Error fetching GemRec:", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

module.exports = router;
