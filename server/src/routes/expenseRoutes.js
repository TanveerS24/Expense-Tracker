import express from 'express';

import allExpense from "../controllers/Expenses/FetchExpenses/allExpense.js";
import addExpense from "../controllers/Expenses/addExpense.js";
import editExpense from "../controllers/Expenses/editExpense.js";
import specificExpense from "../controllers/Expenses/specificExpense.js";
import deleteExpense from  "../controllers/Expenses/deleteExpense.js";
import specificDate from '../controllers/Expenses/FetchExpenses/specficDate.js';
import byMonth from '../controllers/Expenses/FetchExpenses/byMonth.js';

const Router = express.Router();

Router.get('/:userId', allExpense);
Router.post('/:userId', addExpense);
Router.get('/:userId/monthly', byMonth);
Router.get('/:userId/date/:date', specificDate);
Router.get('/:userId/record/:recordId', specificExpense);
Router.put('/:userId/record/:recordId', editExpense);
Router.delete('/:userId/record/:recordId', deleteExpense);

export default Router;