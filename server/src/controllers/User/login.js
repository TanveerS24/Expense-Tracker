import argon2 from "argon2";
import User from "../../models/user.js";

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            console.error("Missing email or password");
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            console.error("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await argon2.verify(user.password, password);

        if (!isMatch) {
            console.error("Invalid credentials");
            return res.status(401).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default Login;
