import Accommodation from "../models/Accommodation.js";
import mongoose from "mongoose";

export const getAccommodations = async (req, res) => {
    try {
        const { location } = req.query;
        let filter = {};

        if (location && location !== "All locations") {
            filter.location = location;
        }

        const accommodations = await Accommodation.find(filter);
        res.status(200).json(accommodations);
    } catch (error) {
        console.error("Error in fetching accommodations: ", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getAccommodation = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Listing ID" });
        }

        const listing = await Accommodation.findById(id);
        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }

        res.status(200).json(listing);
    } catch (error) {
        console.error("Server error:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getHostAccommodations = async (req, res) => {
    try {
        const accommodations = await Accommodation.find({ hostId: req.user.id });
        res.status(200).json(accommodations);
    } catch (error) {
        console.error("Error fetching host accommodations:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const createAccommodation = async (req, res) => {
    try {
        if (!req.body.title || !req.body.location || !req.body.price || !req.files.length) {
            return res.status(400).json({ message: "All required fields must be provided" });
        }

        const imageUrls = req.files.map(file => file.path);

        const accommodationData = {
            ...req.body,
            images: imageUrls,
            hostId: req.user.id,
            host: req.user.username,
        };

        const accommodation = new Accommodation(accommodationData);
        await accommodation.save();

        res.status(201).json({ message: "Accommodation created successfully", accommodation });
    } catch (error) {
        console.error("Error creating accommodation:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const updateAccommodation = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: "Invalid accommodation ID" });
        }

        const accommodation = await Accommodation.findById(id);
        if (!accommodation) {
            return res.status(404).json({ message: "Accommodation not found" });
        }

        if (accommodation.hostId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized: You can only update your own listings" });
        }

        let updatedData = { ...req.body };

        if (req.files && req.files.length > 0) {
            updatedData.images = req.files.map(file => file.path);
        }   else if (req.body.existingImages) {
            updatedData.images = JSON.parse(req.body.existingImages); 
        } else {
            updatedData.images = accommodation.images; 
        }

        if (req.body.specifics) {
            updatedData.specifics = typeof req.body.specifics === "string"
                ? JSON.parse(req.body.specifics)
                : req.body.specifics;
        } else {
            updatedData.specifics = accommodation.specifics;
        }

        if (req.body.amenities) {
            updatedData.amenities = typeof req.body.amenities === "string"
                ? JSON.parse(req.body.amenities)
                : req.body.amenities;
        } else {
            updatedData.amenities = accommodation.amenities;
        }

        const updatedAccommodation = await Accommodation.findByIdAndUpdate(id, updatedData, { new: true });

        res.status(200).json({ message: "Accommodation updated successfully", updatedAccommodation });
    } catch (error) {
        console.error("Error updating accommodation:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const deleteAccommodation = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: "Invalid accommodation ID" });
        }

        const accommodation = await Accommodation.findById(id);
        if (!accommodation) {
            return res.status(404).json({ message: "Accommodation not found" });
        }

        if (accommodation.hostId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized: You can only delete your own listings" });
        }

        await Accommodation.findByIdAndDelete(id);
        res.status(200).json({ message: "Accommodation deleted successfully" });
    } catch (error) {
        console.error("Error deleting accommodation:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
