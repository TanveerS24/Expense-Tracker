import Expense from "../models/expense.js";

const addExpense = async (req, res) => {
  try {
    console.log("Adding expense for user:", req.params.userId);
    const { description, amount, category, transactionType, date } = req.body;

    const newExpense = new Expense({
      userId: req.params.userId,
      description,
      amount,
      category,
      transactionType,
      date
    });

    await newExpense.save();

    res.status(201).json({ message: "Expense added successfully", expense: newExpense });
  } catch (error) {
    console.error("Error adding expense:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default addExpense;
    