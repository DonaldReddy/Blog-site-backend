import app from "./app.js"
import dotenv from "dotenv";
dotenv.config()
import dbConnect from "./database/dbConnect.js";

dbConnect().then(() => {
    const PORT = process.env.PORT;

    app.listen(PORT, () => {
        console.log("listening");
    })
})