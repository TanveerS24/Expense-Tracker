import express from 'express';
import passport from 'passport';

import register from "../controllers/User/register.js";
import login from "../controllers/User/login.js";
import userDetails from '../controllers/User/userDetail.js';
import send_verification_email from '../controllers/User/sendEmail.js';
import verifyOTP from '../controllers/User/verifyOTP.js';
import deleteUser from "../controllers/User/deleteUser.js";

const Router = express.Router();

Router.post('/register', register);
Router.post('/login', login);
Router.get('/userdetail', userDetails);
Router.post('/sendverificationemail', send_verification_email);
Router.post('/verifyOTP', verifyOTP);
Router.delete('/:userId/delete', deleteUser);

export default Router;