import express from 'express';
import passport from 'passport';

import register from "../controllers/register.js";
import login from "../controllers/login.js";
import loginFailed from '../controllers/loginFailed.js';
import userDetails from '../controllers/userDetail.js';
import send_verification_email from '../controllers/sendEmail.js';
import verifyOTP from '../controllers/verifyOTP.js';
import deleteUser from "../controllers/deleteUser.js";

const Router = express.Router();

Router.post('/register', register);
Router.post('/login', login);
Router.get('/auth/google', passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: loginFailed
}));
Router.get('google', passport.authenticate('google', ["profile", "email"]));
Router.get('/userdetail', userDetails);
Router.post('/sendverificationemail', send_verification_email);
Router.post('/verifyOTP', verifyOTP);
Router.delete('/:userId/delete', deleteUser);

export default Router;