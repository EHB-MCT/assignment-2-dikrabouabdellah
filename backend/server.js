const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const gemRecRoutes = require("./routes/gemRecRoutes.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error("MongoDB connection error:", err));

// GemRec routes
app.use("/api/gemrecs", gemRecRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
