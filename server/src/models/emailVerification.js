import mongoose from 'mongoose';

const emailVerificationSchema = new mongoose.Schema({
    email: { 
        type: String,
         required: true 
    },
    verificationCode: { 
        type: String,
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
        expires: 600 }
});

const EmailVerification = mongoose.model('EmailVerification', emailVerificationSchema);

export default EmailVerification;