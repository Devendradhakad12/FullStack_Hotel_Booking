import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  { 
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adminId",
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      unique: true,
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    image: { 
      type: String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    } ,
    resetPasswordToken:{
      type:String
    }
    ,
    resetPasswordExpire:{
      type:Date
    },
  } 
);
export default mongoose.model("User", UserSchema);
