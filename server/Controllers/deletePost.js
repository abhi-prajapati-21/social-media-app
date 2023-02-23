import Post from '../Models/Post.js'

export const deletePost = async (req, res) => {
     const { id: _id} = req.params;
    try {
        await Post.findByIdAndRemove(_id);
        res.status(200).json({message: 'post deleted'})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}