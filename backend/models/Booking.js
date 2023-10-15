import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    room:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Room",
      required:true
    },
    customer:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
    checkIn:{
      type:Date,
      required:true
    },
    checkout:{
      type:Date,
      required:true
    },
    paymentInfo: {
      id: {
        type: String,
        required: [true, "Payment id is Required"],
      },
      status: {
        type: String,
        required: [true, "payment Status is Required"],
      },
    },
    paidAt: {
      type: Date,
      required: [true, " PaidAt is Required"],
    },
    roomRent:{
      type: Number,
      required: [true, " item price is Required"],
    }

  }
);
export default mongoose.model("Booking", BookingSchema);