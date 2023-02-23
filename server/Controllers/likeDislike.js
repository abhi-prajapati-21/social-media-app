import Post from "../Models/Post.js";

export const likeDislikeController = async (req, res) => {
    
    const {id: _id} = req.params;
    const  value  = req.body.value.value;
    const  userId  = req.body.value.userId;
    
    try {
        const singlePost = await Post.findById(_id)
        const upIndex = singlePost.likes.findIndex((id) => id === String(userId))
        const downIndex = singlePost.disLikes.findIndex((id) => id === String(userId))

        if(value === 'likes'){
            if(downIndex !== -1){
                singlePost.disLikes = singlePost.disLikes.filter((id) => id !== String(userId))
            } 
            if(upIndex === -1){
                singlePost.likes.push(userId)
            }else{
                singlePost.likes = singlePost.likes.filter((id) => id !== String(userId))
            }
        }
        else if(value === 'disLikes'){
            if(upIndex !== -1){
                singlePost.likes = singlePost.likes.filter((id) => id !== String(userId))
            } 
            if(downIndex === -1){
                singlePost.disLikes.push(userId)
            }else{
                singlePost.disLikes = singlePost.disLikes.filter((id) => id !== String(userId))
            }
        }
        await Post.findByIdAndUpdate( _id, singlePost )
        res.status(200).json({ message: 'likedd'})
    } catch (error) {
        res.status(404).json({ message: error.messge})
    }
}