import crypto from "crypto";
import transporter from "../config/email.js";
import EmailVerification from "../models/emailVerification.js";

const random_number= () => {
    const ran_int = crypto.randomInt(100000, 1000000);
    return ran_int.toString();
}

const send_verification_email = async (req, res) => {
    const { email } = req.body;
    const verificationCode = random_number();
    try {
        const emailVerification = new EmailVerification({ email, verificationCode });
        await emailVerification.save();
        console.log("Email and verification code saved successfully");
    } catch (error) {
        console.error("Error saving email verification:", error);
    }
    

    try {
        const info = await transporter.sendMail({
            from: `"Expense Tracker" <${process.env.MAIL_USERNAME}>`, // sender address
            to: email,                // list of receivers
            subject: 'Hello from Nodemailer',           // Subject line
            text: 'This is text file', // plain text body
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9; border-radius: 8px;">
                    <h2 style="color: #333;">Hey there 👋</h2>
                    <p style="font-size: 16px; color: #555;">
                    Here’s your OTP: <strong style="font-size:18px; color:#2c3e50;">${otp}</strong>
                    </p>
                    <p style="font-size: 14px; color: #777;">Use this OTP to verify your email.  
                    It’s valid only for a short time, so don’t keep it waiting 🙂.
                    </p>
                    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
                    <p style="font-size: 12px; color: #aaa;">
                    If you didn’t request this, just ignore this mail.
                    </p>
                    <p style="margin-top:30px; font-size:14px; color:#9ca3af;">
                    With love,<br/>
                    <strong>Tanveer 💕</strong>
                    </p>
                </div>
                `
        });
        console.log("Email sent successfully:", info);
        res.status(200).json({ message: "Verification email sent successfully" });  
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send verification email" });
    }
}

export default send_verification_email;