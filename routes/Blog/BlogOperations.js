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
        if (!blog.length)
            return { status: false };
        return { status: true, blog: blog };
    } catch (error) {
        return { status: false, error: error };
    }
}

async function addBlog(author = "", email = "", title = "", content = "") {
    try {
        await Blog.insertMany({ author: author, email: email, title: title, content: content });
        return { status: true };
    } catch (error) {
        return { status: false, error: error.message };
    }
}

async function editBlog(id = "", title = "", content = "") {
    try {
        await Blog.findByIdAndUpdate(id, { title: title, content: content });
        return { status: true };
    } catch (error) {
        return { status: false, error: error.message };
    }
}

async function deleteBlog(id = "") {
    try {
        await Blog.findByIdAndDelete(id);
        return { status: true };
    } catch (error) {
        return { status: false, error: error.message };
    }
}

export { addBlog, getBlogs, getBlog, editBlog, deleteBlog };