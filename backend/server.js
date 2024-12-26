//Logic for the backend

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const gemRecRoutes = require("./routes/gemRecRoutes.js");
const bodyParser = require("body-parser");
const trackingRoutes = require("./routes/trackingRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error("MongoDB connection error:", err));

// GemRec routes
app.use("/api/gemrecs", gemRecRoutes);

// Tracking routes
app.use("/api", trackingRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
