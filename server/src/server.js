import express from "express";
import dotenv from "dotenv";

dotenv.config();

import connectDB from "./config/db.js";
import expenseRouter from "./routes/expenseRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/expenses", expenseRouter);
app.use("/api/users", userRouter);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});


