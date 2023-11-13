import express from "express"
import { newUser, loginUser } from "./UserAuthentication.js";

const route = express.Router();

route.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    const response = await newUser(name, email, password)
    res.send(JSON.stringify(response));
})

route.post("/signin", async (req, res) => {

    const { email, password } = req.body;

    const response = await loginUser(email, password);

    console.log(`user logged in ${email}`);
    res.send(JSON.stringify(response));
})

export default route;