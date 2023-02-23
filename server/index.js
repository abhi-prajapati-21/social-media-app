import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './Routes/users.js'
import postMediaRoutes from './Routes/uploadMedia.js'
import fetchAllPostRoutes from './Routes/fetchAllPosts.js'
import deletePostRoutes from './Routes/deletePost.js'
import friendsRoutes from './Routes/friendsRoute.js'

const app = express();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());
app.use('/uploads', express.static('uploads'))

app.get('/', (req, res) => {
  res.send("this is a social media app")
});

app.use('/profile', userRoutes);
app.use('/createPost', postMediaRoutes)
app.use('/community', fetchAllPostRoutes)
app.use('/post', deletePostRoutes)
app.use('/friends', friendsRoutes)

const PORT = process.env.PORT || 5000;

const DATABASE_URL = 'mongodb+srv://abhi:abhi@social-app.odt1m1z.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then( () => app.listen(PORT, () => console.log("server running on port 5000")))
.catch(error => console.log(error.message))

