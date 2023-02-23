import Post from "../Models/Post.js"

export const fetchAllPosts = async (req, res) => {
     
    try {
        const allPosts = await Post.find();
        const allPostsDetails = [];
        
        allPosts.forEach(post => {
            allPostsDetails.push({
                _id: post._id,
                userPosted: post.userPosted,
                postedOn: post.postedOn,
                postBody: post.postBody,
                postMedia: post.postMedia,
                mediaType: post.mediaType,
                likes: post.likes,
                dislikes: post.dislikes
            })
        })
        res.status(200).json({result: allPosts})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}