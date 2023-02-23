import Post from '../Models/Post.js'

export const uploadMedia = async (req, res) => {
        const postBody = req.body.postBody;
        const userName = req.body.userName;
        const userId = req.body.userId;
        const postMedia = req.file ? req.file.path : null;
        
        const identifyMediaType = () => {
         if (req?.file?.mimetype.includes('image')) {
            return 'image';
         }else if (req?.file?.mimetype.includes('video')) {
            return 'video';
         }else{ return null; }
        }
        const mediaType =  identifyMediaType();
        
      try {
         const createPost = await Post.create({userPosted:{ userId: userId, userName: userName }, postBody, mediaType, postMedia, likes: Post.likes, dislikes: Post.dislikes}) 
         res.status(200).json({result: createPost})
      } catch (error) {
         res.status(404).json({message: error.message})
      }
 }