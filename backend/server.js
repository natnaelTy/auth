import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth-route.js";
import cookiParser from "cookie-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin: "http://localhost:5173", credentials: true}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log(`server is running on PORT ${PORT}`);
});


