import express from 'express';

import allExpense from "../controllers/addExpense.js";
import addExpense from "../controllers/addExpense.js";
import editExpense from "../controllers/editExpense.js";
import specificExpense from "../controllers/specificExpense.js";
import deleteExpense from  "../controllers/deleteExpense.js";

const Router = express.Router();

Router.get('/user/:userId', allExpense);
Router.post('/user/:userId', addExpense);
Router.put('/user/:userId/record/:recordId', editExpense);
Router.get('/user/:userId/record/:recordId', specificExpense);
Router.delete('/user/:userId/record/:recordId', deleteExpense);

export default Router;