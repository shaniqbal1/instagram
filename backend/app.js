import express from "express";
import  dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();

app.use(cors())

//routes
app.use("/api",require("./routes/authRoutes"));



export default app;