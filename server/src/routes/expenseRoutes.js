import express from 'express';

import allExpense from "../controllers/allExpense.js";
import addExpense from "../controllers/addExpense.js";
import editExpense from "../controllers/editExpense.js";
import specificExpense from "../controllers/specificExpense.js";
import deleteExpense from  "../controllers/deleteExpense.js";

const Router = express.Router();

Router.get('/:userId', allExpense);
Router.post('/:userId', addExpense);
Router.get('/:userId/record/:recordId', specificExpense);
Router.put('/:userId/record/:recordId', editExpense);
Router.delete('/:userId/record/:recordId', deleteExpense);

export default Router;