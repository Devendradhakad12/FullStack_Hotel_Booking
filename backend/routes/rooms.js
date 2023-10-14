import  express  from "express"
import {  acRoom, bookedRoom, bookedRoomDelete, createRoom, deleteRoom, getAllRoom, getRoom, getbyidRoom, reserveRoom, updateRoom } from "../controllers/room.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyUser.js"


 const router = express.Router()
 
 //create room 
 router.post("/create",verifyAdmin, createRoom)

 //get room
 router.get("/",verifyAdmin,getRoom) 
 
 //get all room
 router.get("/getallrooms",getAllRoom) 

 //delete room
 router.delete("/delete/:id",deleteRoom)//verifyAdmin,

 //get by id room
 router.get("/getbyid/:id",getbyidRoom) 

 //update room
 router.put("/updateroom/:id",updateRoom)//verifyUser,
 
 // get booked room
 router.get("/booked",verifyAdmin,bookedRoom)

 // get reserve room
 router.get("/reserve",reserveRoom)

 // delete booked room 
 router.delete("/bookedrooms/:id",bookedRoomDelete)

 // get ac room
 router.get("/acroom",acRoom)
  
 export default router   