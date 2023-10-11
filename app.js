import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import UserRoutes from "./routes/User/UserRoutes.js"
import BlogRoutes from "./routes/Blog/BlogRoutes.js"

const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(UserRoutes);
app.use(BlogRoutes);


export default app;