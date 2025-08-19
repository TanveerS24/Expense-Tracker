import argon2 from "argon2";

import User from "../models/user.js";

const Register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (await User.findOne({ email })) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashedPassword = await argon2.hash(password);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default Register;
