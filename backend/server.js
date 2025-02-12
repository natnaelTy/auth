import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth-route.js";

dotenv.config();

const app = express();
const port = 3000


app.get("/", (req, res) => {
    res.send("Hello world");
})

app.use("/api/auth", authRoutes);


app.listen(3000, () => {
    connectDB();
    console.log(`server is running on port ${port}`);
});


