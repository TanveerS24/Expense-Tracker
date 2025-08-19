import Expense from "../models/expense.js";

const editExpense = async (req, res) => {
    try {
        const { recordId } = req.params;
        const { description, amount, category, transactionType, date } = req.body;

        const updatedExpense = await Expense.findByIdAndUpdate(
            recordId,
            { description, amount, category, transactionType, date },
            { new: true }
        );

        if (!updatedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.status(200).json({ message: "Expense updated successfully", expense: updatedExpense });
    } catch (error) {
        console.error("Error updating expense:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default editExpense;