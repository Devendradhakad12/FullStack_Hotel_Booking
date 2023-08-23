import  express  from "express"
import {  acRoom, bookedRoom, bookedRoomDelete, createRoom, deleteRoom, getRoom, getbyidRoom, updateRoom } from "../controllers/room.js"
import { verifyAdmin, verifyUser } from "../utils/verifyUser.js"


 const router = express.Router()
 
 //create room 
 router.post("/create",verifyAdmin, createRoom)

 //get room
 router.get("/",verifyAdmin,getRoom) 

 //delete room
 router.delete("/delete/:id",deleteRoom)//verifyAdmin,

 //get by id room
 router.get("/getbyid/:id",getbyidRoom) 

 //update room
 router.put("/updateroom/:id",verifyAdmin,updateRoom)

 // get booked room
 router.get("/booked",verifyAdmin,bookedRoom)

 // delete booked room 
 router.delete("/bookedrooms/:id",bookedRoomDelete)

 // get ac room
 router.get("/acroom",acRoom)
 
 export default router   