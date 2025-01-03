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
    images: {
        type: [String],
        required: true,
    },
    type: {
        type: String,
        enum: ["Entire apartment", "Private room", "Shared room"],
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    guests: {
        type: Number,
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true,
    },
    amenities: {
        type: [String],
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    reviews: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    host: {
        type: String,
        required: true,
    },
    hostId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    weeklyDiscount: {
        type: Number,
        default: 0,
    },
    cleaningFee: {
        type: Number,
        required: true,
    },
    serviceFee: {
        type: Number,
        required: true,
    },
    occupancyTaxes: {
        type: Number,
        required: true,
    },
    enhancedCleaning: {
        type: Boolean,
        default: false,
    },
    selfCheckIn: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        required: true,
    },
    specifics: {
        cleanliness: {
            type: Number,
            default: 0,
        },
        communication: {
            type: Number,
            default: 0,
        },
        checkin: {
            type: Number,
            default: 0,
        },
        accuracy: {
            type: Number,
            default: 0,
        },
        location: {
            type: Number,
            default: 0,
        },
        value: {
            type: Number,
            default: 0,
        },
    },
    reservationDates: {
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
    },
    totalGuests: {
        type: Number,
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

