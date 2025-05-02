import User from "../models/User.js"
// Assume connectDB is called once at server startup, not here

const registerUser = async (req, res) => {
    const { name, surname, email, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password here before saving (not shown for brevity)
        const newUser = new User({
            name,
            surname,
            email,
            password // hash this!
        });

        const savedUser = await newUser.save();
        res.status(201).json({ message: "User registered", user: savedUser });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: "Server error" });
    }
};

export default registerUser;