import User from "../models/User.js"


const registerUser = async (req, res) => {
    const { name, surname, email, password } = req.body;
    try {
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        
        const newUser = new User({
            name,
            surname,
            email,
            password 
        });

        const savedUser = await newUser.save();
        res.status(201).json({ message: "User registered", user: savedUser });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: "Server error" });
    }
};

export default registerUser;