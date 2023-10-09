import bodyParser from "body-parser";
import express from "express";
import cors from "cors"

const app = express()
const PORT = 3000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/signup", (req, res) => {
    console.log(req.body, req.query, req.params);
    res.send("hello");
})

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log("listening");
})