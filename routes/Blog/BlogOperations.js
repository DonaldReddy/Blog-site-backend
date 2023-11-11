import Blog from "../../database/schemas/Blog.js";
import mongoose from "mongoose";

async function getBlogs(email = "") {
    try {
        const blogs = await Blog.find({ email: email });
        return { status: true, email: email, blogs: blogs };
    } catch (error) {
        return { status: false, error: error.message };
    }

}

async function getBlog(id = "") {
    try {
        const blog = await Blog.find({ _id: new mongoose.Types.ObjectId(id) });
        return { status: true, blog: blog };
    } catch (error) {
        return { status: false, error: error };
    }
}

async function addBlog(email = "", title = "", content = "") {
    try {
        await Blog.insertMany({ email: email, title: title, content: content });
        return { status: true };
    } catch (error) {
        return { status: false, error: error.message };
    }
}

async function editBlog(id = "", title = "", content = "") {
    try {
        await Blog.findByIdAndUpdate(id, { title: title, content: content });
        console.log("done");
        return { status: true };
    } catch (error) {
        return { status: false, error: error.message };
    }
}

export { addBlog, getBlogs, getBlog, editBlog };