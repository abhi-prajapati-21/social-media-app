import User from '../Models/User.js'

export const signup = async (req, res) => {
   
    const { name, email, password } = req.body;
    try {

        const existinguser = await User.findOne({ email });
        if(existinguser){
            return res.status(404).json({ message: "User already Exist."})
        }
        
        const newUser = await User.create({ name, email, password})
        res.status(200).json({result: newUser})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

 export const login = async (req, res) => {
   
     const { email, password } = req.body;

     try {
        const existinguser = await User.findOne({ email });
        if(!existinguser){
            return res.status(404).json({ message: "User don't Exist."})
        }
    
         const crtPass = await User.findOne({ password });
         
         if(password !== existinguser.password) {
             return res.status(405).json({ message: "invalid password"})
         }

        res.status(200).json({result: existinguser})
     } catch (error) {
         res.status(404).json({message: error.message})
     }
 }