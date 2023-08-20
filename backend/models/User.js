import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      unique: true,
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
    }
  } 
);
export default mongoose.model("User", UserSchema);
