import express from "express"
import { getBlogs, addBlog } from "./BlogOperations.js"

const route = express.Router()

route.get("/blogs/:mail", async (req, res) => {
    const { email } = req.params;
    const blogs = await getBlogs(email);
    res.send(JSON.stringify(blogs));
})

export default route;