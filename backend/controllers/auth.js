import UserSchema from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from "dotenv";
import { createError } from "../utils/createError.js";
 
env.config();
// register
export const register = async (req, res, next) => {
  try {
    const finduser = await UserSchema.findOne({ username: req.body.username });
    const finduseremail = await UserSchema.findOne({ email: req.body.email });
    const finduserphone = await UserSchema.findOne({ phone: req.body.phone });
    if (finduser || finduseremail || finduserphone) return  next(createError(400,"user already exist"))
    let password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new UserSchema({
      ...req.body,
      password: hash, 
    });
    await newUser.save();
    res.status(200).send("user has been created");
  } catch (error) {
    next(error);
  }
};

// login
export const login = async (req, res, next) => {
  try {
    const user = await UserSchema.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("User Not exist please register");
    const passCompare = await bcrypt.compare(req.body.password, user.password);
    if (!passCompare) return res.status(400).send("wrong username or password");
    const { password, isAdmin, ...otherdetails } = user._doc;
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ details: { ...otherdetails }, isAdmin });
  } catch (error) {
    next(error);
  }
};
