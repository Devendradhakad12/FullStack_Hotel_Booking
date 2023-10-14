import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
   
    title: {
      type: String,
      required: true,
    },
    ac: {
      type: Boolean,  
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }, 
    roomNumber: {
      unique: true,
      type: Number,
      required: true,
    },
    photos: {
      type: [String],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adminId",
    },
    unavailableDates: {
      type: [Date],
    },
    booking: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Booking", BookingSchema);