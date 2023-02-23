import User from "../Models/User.js"

export const fetchAllUsers = async (req, res) => {
        
     try {
        const allUsers = await User.find();
        const allUsersDetails = [];
        allUsers.forEach(user => {
            allUsersDetails.push({_id: user._id, 
                name: user.name, 
                email: user.email, 
                password: user.password, 
                friends: user.friends, 
                joinedOn: user.joinedOn})
        })
        res.status(200).json(allUsersDetails)
     } catch (error) {
        res.status(404).json({message: error.message})
     }
}