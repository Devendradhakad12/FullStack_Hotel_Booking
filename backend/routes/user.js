import express  from 'express';
import { deleteUser, getUser, getallUser } from '../controllers/user.js';
import { verifyAdmin, verifyUser } from '../utils/verifyUser.js';
const router = express.Router()

//get user
router.get('/:id',getUser)//verifyUser,

// get all user
router.get('/',verifyAdmin,getallUser)//verifyAdmin

// delete user
router.delete('/delete/:id',deleteUser)//verifyAdmin

export default router 