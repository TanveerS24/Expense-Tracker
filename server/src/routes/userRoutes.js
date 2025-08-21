import express from 'express';

import register from "../controllers/register.js";
import login from "../controllers/login.js";
import send_verification_email from '../controllers/sendEmail.js';
import verifyOTP from '../controllers/verifyOTP.js';
import deleteUser from "../controllers/deleteUser.js";

const Router = express.Router();

Router.post('/register', register);
Router.post('/login', login);
Router.post('/sendverificationemail', send_verification_email);
Router.post('/verifyOTP', verifyOTP);
Router.delete('/:userId/delete', deleteUser);

export default Router;