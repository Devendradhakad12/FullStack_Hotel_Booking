import RoomSchema from "../models/Room.js";

// create room
export const createRoom = async (req, res, next) => {
  let room = new RoomSchema(req.body);
  try {
    let savedroom = await room.save();
    res.status(200).json(savedroom);
  } catch (err) {
   next(err)
  }
};

// get all room
export const getRoom = async (req, res, next) => {
  try {
    const rooms = await RoomSchema.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err)
  }
};

// delete room
export const deleteRoom = async (req, res, next) => {
  try {
     await RoomSchema.findByIdAndDelete(req.params.id);
    res.status(200).json("room deleted");
  } catch (err) {
    next(err)
  }
};

// update room
export const updateRoom = async (req, res, next) => {
  try {
    let updatedRoom =  await RoomSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
    res.status(200).json(updatedRoom) 
  } catch (err) {
     next(err)
  }
};
