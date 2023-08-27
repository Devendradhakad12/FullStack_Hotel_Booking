import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adminId",
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
export default mongoose.model("Room", RoomSchema);
