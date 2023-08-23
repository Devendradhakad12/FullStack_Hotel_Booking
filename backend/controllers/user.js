import User from "../models/User.js";
//64df19d56d2f77f5870f97e5
// get user
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
//  get all users
export const getallUser = async (req, res, next) => {
  try {
    const user = await User.find({adminId:req.user.id});
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

//  delete  user
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user deleted");
  } catch (error) {
    next(error);
  }
};
