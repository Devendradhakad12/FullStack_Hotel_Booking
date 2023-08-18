import  express  from "express"
import { acRoom, bookedRoom, createRoom, deleteRoom, getRoom, updateRoom } from "../controllers/room.js"
import { verifyAdmin } from "../utils/verifyUser.js"


 const router = express.Router()
 
 //create room
 router.post("/create",verifyAdmin, createRoom)

 //get room
 router.get("/getallroom",getRoom) 

 //delete room
 router.delete("/deleteroom/:id",verifyAdmin,deleteRoom)

 //update room
 router.put("/updateroom/:id",verifyAdmin,updateRoom)

 // get booked room
 router.get("/bookedroom",bookedRoom)

 // get ac room
 router.get("/acroom",acRoom)

 export default router 