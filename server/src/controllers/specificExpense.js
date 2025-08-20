import Expense from "../models/expense.js";

const specificRecord = async (req, res) => {
    try {
        const recordId = req.params.recordId;
        console.log("Fetching specific expense with ID:", recordId);
        const expense = await Expense.findById(recordId);

        if (!expense) {
            console.error("Expense not found");
            return res.status(404).json({ message: "Expense not found" });
        }

        res.status(200).json(expense);
    } catch (error) {
        console.error("Error fetching expense:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default specificRecord;
