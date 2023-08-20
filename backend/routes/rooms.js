import  express  from "express"
import { acRoom, bookedRoom, bookedRoomDelete, createRoom, deleteRoom, getRoom, updateRoom } from "../controllers/room.js"
import { verifyAdmin } from "../utils/verifyUser.js"


 const router = express.Router()
 
 //create room
 router.post("/create",verifyAdmin, createRoom)

 //get room
 router.get("/",getRoom) 

 //delete room
 router.delete("/:id",deleteRoom)//verifyAdmin,

 //update room
 router.put("/updateroom/:id",verifyAdmin,updateRoom)

 // get booked room
 router.get("/bookedroom",bookedRoom)

 // delete booked room
 router.delete("/bookedrooms/:id",bookedRoomDelete)

 // get ac room
 router.get("/acroom",acRoom)
 
 export default router 