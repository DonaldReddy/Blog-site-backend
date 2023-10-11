import express from "express"
import { newUser, loginUser } from "./UserAuthentication.js";

const route = express.Router();

route.post("/signup", async (req, res) => {

    const { email, password } = req.body;

    const response = await newUser(email, password)
    console.log(`new user created ${email}`);
    res.send(JSON.stringify(response));
})

route.post("/signin", async (req, res) => {

    const { email, password } = req.body;

    const response = await loginUser(email, password);

    console.log(`user logged in ${email}`);
    res.send(JSON.stringify(response));
})

route.get("/blogs/:email", (req, res) => {
    const { email } = req.params
    console.log(email);
})

export default route;