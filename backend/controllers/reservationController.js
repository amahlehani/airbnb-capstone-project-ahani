import Reservation from '../models/Reservation.js';
import Accommodation from '../models/Accommodation.js';

export const getHostReservations = async (req, res) => {
    try {
        const accommodations = await Accommodation.find({ host: req.user._id });
        const accommodationIds = accommodations.map(accommodation => accommodation._id);

        const reservations = await Reservation.find({ accommodation: { $in: accommodationIds } })
            .populate("accommodationId", "title location")
            .populate("userId", "username email");
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch reservations", error: "Server error"});
    }
};

export const getUserReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find({ userId: req.user._id })
            .populate("accommodationId", "title location price")
            .populate("userId", "username email");
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch reservations", error: "Server error"});
    }
};

export const createReservation = async (req, res) => {
    try {
        const reservation = await Reservation.create(req.body);
        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ message: "Failed to create reservations", error: "Server error"});
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