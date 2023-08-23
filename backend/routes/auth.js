import express from "express"
import { createUser, login, register } from "../controllers/auth.js"
import { verifyAdmin } from "../utils/verifyUser.js"

const router = express.Router()

router.post('/ragister',register)
router.post('/createuser',verifyAdmin,createUser)
router.post('/login',login) 
 

export default router  