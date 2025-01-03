import Accommodation from "../models/Accommodation.js";

export const getAccommodation = async (req, res) => {
    try {
        const accommodations = await Accommodation.find({}); 
        res.status(200).json(accommodations);
    } catch (error) {
        console.error('Error in fetching accommodation:', error.message);
        res.status(500).json("Server error");
    }
};

export const createAccommodation = async (req, res) => {
    try {
        const newAccommodation = await Accommodation.create(req.body);
        res.status(201).json(newAccommodation);
    } catch (error) {
        res.status(500).json("Server error");
    }
};

export const deleteAccommodation = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json("Invalid accommodation id");
    }

    try {
        await Accommodation.findByIdAndDelete(id);
        res.status(200).json("Accommodation deleted successfully");
    } catch (error) {
        console.error('Error in deleting accommodation:', error.message);
        res.status(500).json("Server Error");
    }
};
