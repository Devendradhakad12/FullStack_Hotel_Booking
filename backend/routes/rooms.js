import  express  from "express"
import { createRoom, deleteRoom, getRoom, updateRoom } from "../controllers/room.js"


 const router = express.Router()
 
 //create room
 router.post("/create", createRoom)

 //get room
 router.get("/getallroom",getRoom)

 //delete room
 router.delete("/deleteroom/:id",deleteRoom)

 //update room
 router.put("/updateroom/:id",updateRoom)

 export default router