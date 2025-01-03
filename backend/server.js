// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Connect to MongoDB
import { connectDB } from './config/db.js';

// Import routes
import accommodationRoutes from "./routes/accommodationRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Initialize app
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/accommodations", accommodationRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/users", userRoutes);

// Error handling
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json("Server error");
});

app.get("/", (req, res) => {
    res.send("Welcome to the Airbnb API");
});

// Start server
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});