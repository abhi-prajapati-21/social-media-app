import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    userPosted: {
        userId: String,
        userName: String
    },
    postedOn: {type: Date, default: Date.now},
    postBody: {type: String},
    postMedia: {type: String},
    mediaType: {type: String},
    likes: { type: [String], default: 0},
    disLikes: { type: [String], default: 0}
})

export default mongoose.model('Post', PostSchema);