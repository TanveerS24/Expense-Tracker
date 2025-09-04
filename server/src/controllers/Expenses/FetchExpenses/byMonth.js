import Expense from "../../../models/expense.js";

const byMonth = async (req, res) => {
    try {
        console.log("Inside byMonth controller");
        const userId = req.params.userId;
        const { month, year } = req.query;
        console.log(`Fetching expenses for user: ${userId} for month: ${month}, year: ${year}`);
        const expenses = await Expense.find({
            userId,
            date: {
                $gte: new Date(year, month - 1, 1),
                $lt: new Date(year, month, 1),
            },
        });
        
        return res.status(200).json(expenses);
    } catch (error) {
        console.error("Error fetching expenses by month:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export default byMonth;
