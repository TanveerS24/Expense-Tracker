import express from 'express';

import register from "../controllers/register.js";
import login from "../controllers/login.js";
import deleteUser from "../controllers/deleteUser.js";

const Router = express.Router();

Router.post('/register', register);
Router.post('/login', login);
Router.delete('/:userId/delete', deleteUser);

export default Router;