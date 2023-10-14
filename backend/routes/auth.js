import express from "express"
import { createUser, forgot, login, register, reset, verify } from "../controllers/auth.js"
import { verifyAdmin } from "../utils/verifyUser.js"

const router = express.Router()

router.post('/ragister',register)
router.post('/createuser',verifyAdmin,createUser)
router.post('/login',login) 
router.post('/forgot',forgot) 
router.post('/verifyotp',verify) 
router.post('/reset',reset) 

 

export default router  