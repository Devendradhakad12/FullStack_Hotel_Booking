import express  from 'express';
import { getUser } from '../controllers/user.js';
import { verifyUser } from '../utils/verifyUser.js';
const router = express.Router()

//get user
router.get('/:id',verifyUser,getUser)

export default router