import Blog from "../../database/schemas/Blog.js";


async function getBlogs(email = "") {
    try {
        const blogs = await Blog.find({ email: email });
        return { status: true, email: email, blogs: blogs };
    } catch (error) {
        return { status: false, error: error.message };
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

export { addBlog, getBlogs };