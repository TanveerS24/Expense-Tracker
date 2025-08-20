import Expense from "../models/expense.js";

const editExpense = async (req, res) => {
    try {
        console.log("Updating expense with ID:", req.params.recordId);
        const { recordId } = req.params;
        const { description, amount, category, transactionType, date } = req.body;

        // Build update object only with defined fields
        const updateFields = {};
        if (description !== undefined) updateFields.description = description;
        if (amount !== undefined) updateFields.amount = amount;
        if (category !== undefined) updateFields.category = category;
        if (transactionType !== undefined) updateFields.transactionType = transactionType;
        if (date !== undefined) updateFields.date = date;

        if (Object.keys(updateFields).length === 0) {
            console.error("No fields to update");
            return res.status(400).json({ message: "No fields to update" });
        }

        const updatedExpense = await Expense.findByIdAndUpdate(
            recordId,
            updateFields,
            { new: true }
        );

        if (!updatedExpense) {
            console.error("Expense not found");
            return res.status(404).json({ message: "Expense not found" });
        }

        res.status(200).json({ message: "Expense updated successfully", expense: updatedExpense });
    } catch (error) {
        console.error("Error updating expense:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default editExpense;