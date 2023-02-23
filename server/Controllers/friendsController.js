import mongoose from "mongoose";
import User from "../Models/User.js";

export const addFriend = async (req, res) => {

    const {id: _id} = req.params;
    const {userId} = req.body;

    try {
        await User.findByIdAndUpdate(_id, {$addToSet: {'friends': [{ id: userId}]}})
        await User.findByIdAndUpdate(userId, {$addToSet: {'friends': [{ id: _id}]}})
        res.status(200).json('friend Added');
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const removeFriend = async (req, res) => {

    const { id: _id } = req.params;
    const {friendId} = req.body;
    
    try {
        const updatedUser = await User.updateOne(
            {_id},
            { $pull : { 'friends' : { _id: ( mongoose.Types.ObjectId(friendId) )} }})

        res.status(200).json('user removed')
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
