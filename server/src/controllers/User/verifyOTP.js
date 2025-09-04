import EmailVerification from "../../models/emailVerification.js";

const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;

    console.log("Received email:", email);
    console.log("Received OTP:", otp);  

    try {
        const verificationRecord = await EmailVerification.findOne({ email, verificationCode:otp });

        if (!verificationRecord) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        // OTP is valid, proceed with verification
        await EmailVerification.deleteOne({ _id: verificationRecord._id });
        return res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default verifyOTP;