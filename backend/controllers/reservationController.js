import Reservation from '../models/Reservation.js';

export const getHostReservations = async (req, res) => {
    try {
        const hostId = req.user.id;

        const hostAccommodations = await Accommodation.find({ hostId }).select("_id");

        const accommodationIds = hostAccommodations.map(accommodation => accommodation._id);

        const reservations = await Reservation.find({ accommodation: { $in: accommodationIds } })
        .populate("user", "username")
            .populate("accommodation", "title startDate endDate");
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch reservations", error: error.message});
    }
};

export const getUserReservations = async (req, res) => {
    try {
        const userId = req.user.id;

        const reservations = await Reservation.find({ user: userId })
        .populate("user", "username")
        .populate("accommodation", "title startDate endDate");
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch reservations", error: error.message});
    }
};

export const getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find()
            .populate("user", "username")
            .populate("accommodation", "title startDate endDate");
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: "Error fetching reservations", error });
    }
};

export const createReservation = async (req, res) => {
    try {
        const { title, accommodationID, startDate, endDate } = req.body;

        if (!title || !accommodationID || !startDate || !endDate) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const reservation = new Reservation({
            title,
            accommodationID,
            user: req.user.id,
            bookedBy: req.user.username,
            startDate,
            endDate,
        });

        await reservation.save();
        res.status(201).json({ message: "Reservation created successfully", reservation });
    } catch (error) {
        console.error("Error creating reservation:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const deleteReservation = async (req, res) => {
    const {id} = req.params;

    try {
        const reservation = await Reservation.findById(id);

        if (!reservation) {
            return res.status(404).json({ message: "Reservation not found"});
        }

        if (reservation.userId.toString() !== req.user.id && req.user.role !== "admin") {
            return res.status(403).json({ message: "You are not authorized to delete this reservation" });
        }

        await reservation.remove();
        res.status(200).json({ message: "Reservation deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete reservations", error: "Server error"});
    }
}