import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import cookieSession from "cookie-session"

dotenv.config();

import connectDB from "./config/db.js";
import "./config/passport.js";

import expenseRouter from "./routes/expenseRoutes.js";

import userRouter from "./routes/userRoutes.js";
import rateLimitMiddleware from "./middlewares/ratelimiter.js";

const app = express();
app.use(express.json());
app.use(rateLimitMiddleware);
app.use(cors());
const cookieSessionMiddleware = cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: [process.env.COOKIE_KEY]
});
app.use(cookieSessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 5000;

app.use("/api/expenses", expenseRouter);
app.use("/api/users", userRouter);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});


