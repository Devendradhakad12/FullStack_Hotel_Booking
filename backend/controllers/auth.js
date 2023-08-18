import UserSchema from "../models/User.js";
import bcrypt from "bcryptjs";
export const register = async (req, res, next) => {
  try {
    const finduser = await UserSchema.findOne({ username: req.body.username });
    const finduseremail = await UserSchema.findOne({ email: req.body.email });
    const finduserphone = await UserSchema.findOne({ phone: req.body.phone });
    if (finduser || finduseremail || finduserphone)
      return res.status(400).json("user alredy exist");
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
export const login = async (req, res, next) => {};
