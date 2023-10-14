import env from "dotenv";
env.config();
import UserSchema from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";
import twilio from "twilio";
import crypto from "crypto";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOkEN;
const verifySid = process.env.TWILIO_VERIFY_SID;
const client = twilio(accountSid, authToken);

//! register
export const register = async (req, res, next) => {
  try {
    const finduseremail = await UserSchema.findOne({ email: req.body.email });
    const finduserphone = await UserSchema.findOne({ phone: req.body.phone });
    if (finduseremail || finduserphone)
      return next(createError(400, "user already exist"));
    let pass = req.body.password;
    const hash = await bcrypt.hash(pass, 10);
    const newUser = new UserSchema({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    //   console.log(newUser);
    const { password, adminId, isAdmin, ...otherdetails } = newUser._doc;
    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.JWT_SECRET
    );
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json({ details: { ...otherdetails }, isAdmin, authToken: token });
  } catch (error) {
    next(error);
  }
};

//! create user
export const createUser = async (req, res, next) => {
  try {
    const finduser = await UserSchema.findOne({ username: req.body.username });
    const finduseremail = await UserSchema.findOne({ email: req.body.email });
    const finduserphone = await UserSchema.findOne({ phone: req.body.phone });
    if (finduser || finduseremail || finduserphone)
      return next(createError(400, "user already exist"));
    let pass = req.body.password;
    const hash = await bcrypt.hash(pass, 10);
    const newUser = new UserSchema({
      ...req.body,
      password: hash,
      adminId: req.user.id,
    });
    await newUser.save();
    const { password, adminId, isAdmin, ...otherdetails } = newUser._doc;
    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.JWT_SECRET
    );
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json({ details: { ...otherdetails }, isAdmin, authToken: token });
  } catch (error) {
    next(error);
  }
};

//! login user
export const login = async (req, res, next) => {
  try {
    //   console.log(req.body);
    const user = await UserSchema.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("User Not exist please register");
    const passCompare = await bcrypt.compare(req.body.password, user.password);
    if (!passCompare) return res.status(400).send("wrong username or password");
    const { adminId, password, isAdmin, ...otherdetails } = user._doc;
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json({ details: { ...otherdetails }, isAdmin, authToken: token });
  } catch (error) {
    next(error);
  }
};

//! Forgot Password

export const forgot = async (req, res, next) => {
  try {
    const { phone } = req.body;
    console.log(phone);
    const user = await UserSchema.findOne({ phone });
    if (!user) return res.status(404).send("wrong phone number");

    // send otp
    const verification = await client.verify
      .services(verifySid)
      .verifications.create({ to: `+91${phone}`, channel: "sms" });
    return res.json({
      message: `otp sent on ${phone}`,
      status: verification.status,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// ! Reset Password
export const verify = async (req, res, next) => {
  try {
    const { phone, otp } = req.body;
    const user = await UserSchema.findOne({ phone });

    const verification_check = await client.verify
      .services(verifySid)
      .verificationChecks.create({ to: `+91${phone} `, code: otp });
    if (verification_check.status === "pending")
      return next(createError(400, "Wrong Opt"));

    const resetPasswordToken = crypto.randomBytes(20).toString("hex");
    const resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpire = resetPasswordExpire;
    user.save();
    res.status(200).json({
      message: `verify`,
      status: verification_check.status,
      resetPasswordToken,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//! reset
export const reset = async (req, res, next) => {
  try {
    const { resetPasswordToken, password } = req.body;
    const user = await UserSchema.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) return res.status(404).send("wrong phone number or otp");
    const hash = await bcrypt.hash(password, 10);
    user.password = hash;
    user.resetPasswordExpire = undefined;
    user.resetPasswordToken = undefined;
    await user.save();
    res.status(200).json({ message: "Password successfuly changed" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
