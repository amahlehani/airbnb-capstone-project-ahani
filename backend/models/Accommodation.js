import mongoose from "mongoose";

const AccommodationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["Entire Apartment", "Private Room", "Shared Room"],
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
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
    price: {
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
        default: 0,
    },
    reviews: {
        type: Number,
        default: 0,
    },
    images: {
        type: [String],
        required: true,
    },
    host: {
        type: String,
        required: true,
    },
    hostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
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
        required: false,
    },
    selfCheckIn: {
        type: Boolean,
        required: false,
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
        checkIn: {
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
},
{
    timestamps: true,
}
);

const Accommodation = mongoose.model("Accommodation", AccommodationSchema);

export default Accommodation;