import Expense from "../../../models/expense.js";

const specificExpense = async (req, res) => {
    try {
        console.log("Inside specific date controller");
        const userId = req.params.userId;
        const dateParam = req.params.date;
        const date = new Date(dateParam);
        const nextDate = new Date(date);
        nextDate.setDate(nextDate.getDate() + 1);
        console.log("Fetching expenses for user:", userId, "on date:", dateParam);
        
        const expenses = await Expense.find({
            userId,
            date: { $gte: date, $lt: nextDate },
        });
        console.log("Fetched expenses for user:", userId, "on date:", dateParam, ":", expenses);
        return res.status(200).json(expenses);
    } catch (error) {
        console.error("Error fetching expenses for user:", userId, "on date:", dateParam, ":", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export default specificExpense;