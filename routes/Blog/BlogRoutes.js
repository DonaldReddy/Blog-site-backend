import express from "express"
import { getBlogs, addBlog, getBlog } from "./BlogOperations.js"

const route = express.Router()

route.post("/addblog", async (req, res) => {
    const { email, title, content } = req.body;
    const blogs = await addBlog(email, title, content);
    res.send(JSON.stringify({ blogs }));
})

route.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const response = await getBlog(id);
    res.send(JSON.stringify(response));
})

route.get("/blogs/:email", async (req, res) => {
    const { email } = req.params;
    const blogs = await getBlogs(email);
    res.send(JSON.stringify(blogs));
})

export default route;