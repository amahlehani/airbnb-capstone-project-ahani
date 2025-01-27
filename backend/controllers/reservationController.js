import Reservation from '../models/Reservation.js';

export const getHostReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find({ hostId: req.user._id})
        .populate("accommodationId");
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch reservations", error: error.message});
    }
};

export const getUserReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find({ userId: req.user._id })
        .populate("accommodationId");
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch reservations", error: error.message});
    }
};

export const createReservation = async (req, res) => {
    try {
        const reservation = new Reservation.create(req.body);
        await reservation.save();
        res.status(201).json({ message: "Reservation created successfully", reservation });
    } catch (error) {
        res.status(500).json({ message: "Failed to create reservation", error: error.message});
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