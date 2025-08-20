import Expense from "../models/expense.js";

const deleteExpense = async (req, res) => {
    try {
        console.log("Deleting expense with ID:", req.params.recordId);
        const { recordId } = req.params;
        const deletedExpense = await Expense.findByIdAndDelete(recordId);

        if (!deletedExpense) {
            console.error("Expense not found for deletion");
            return res.status(404).json({ message: "Expense not found" });
        }

        res.status(200).json({ message: "Expense deleted successfully" });
    } catch (error) {
        console.error("Error deleting expense:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default deleteExpense;
