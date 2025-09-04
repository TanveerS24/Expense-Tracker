import Expense from "../../models/expense.js";

const getAllExpenses = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("Fetching all expenses for user:", userId);
    const expenses = await Expense.find({ userId });
    console.log("Fetched expenses:", expenses);
    return res.status(200).json(expenses);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default getAllExpenses;
