import jwt from "jsonwebtoken";
import env from 'dotenv'
env.config()


// verify token 
export const verifyToken = async (req, res, next) => {
    const token = req.header("auth-token");
    if(!token) return res.status(400).json("user not authenticeted")
     jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
    if(err) return res.send("token not vaild")
    req.user = user
     next()
    })
};


// verifyUser
export const verifyUser  = async (req,res,next)=>{
 verifyToken(req,res,()=>{
    if(req.user.id === req.params.id || req.user.isAdmin) {
        next()
    }else{
        res.status(400).json("you are not authorized")
    }
 })
}
// verifyAdmin
export const verifyAdmin  = async (req,res,next)=>{
 verifyToken(req,res,()=>{
    if(req.user.isAdmin) {
        next()
    }else{
        res.status(400).json("you are not authorized")
    }
 })
}