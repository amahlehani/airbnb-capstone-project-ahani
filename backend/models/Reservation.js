import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    accommodationID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Accommodation"
    },
    location: {
        type: String,
        required: true,
    },
    guests: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    },
    {
        timestamps: true,
    }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;

