import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import roomRoute from "./routes/rooms.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
dotenv.config();
const app = express();

async function DBConect() {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Mongo DB connected");
  } catch (err) {
    console.log(err);
  }
}
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});



// routes 
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/api/rooms',roomRoute)
app.use('/api/users',userRoute) 
app.use('/api/auth',authRoute)

app.use((err,req,res,next)=>{
  const errStatus = err.status || 500
  const errMsg = err.message || "something went wrong!"
return res.status(errStatus).json({
success : false,
status : errStatus,
message : errMsg,
stack : err.stack
})
})

app.listen(6600, () => {
  DBConect();
  console.log("Backend Conected");
});
