import Expense from "../models/expense.js";

const getAllExpenses = async (req, res) => {
  try {
    const userId = req.params.userId;
    const expenses = await Expense.find({ userId });
    res.status(200).json(expenses);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default getAllExpenses;
