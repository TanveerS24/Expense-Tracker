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
            html: `<b>Indha OTP enakku sollu ${verificationCode}</b>` // html body
        });
        console.log("Email sent successfully:", info);
        res.status(200).json({ message: "Verification email sent successfully" });  
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send verification email" });
    }
}

export default send_verification_email;