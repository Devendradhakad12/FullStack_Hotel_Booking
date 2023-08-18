import User from '../models/User.js'
//64df19d56d2f77f5870f97e5
// get user
export const getUser = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
   res.status(200).json(user)
        
    } catch (error) {
        next(error)
    }

}