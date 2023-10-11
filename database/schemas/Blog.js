import mongoose from "mongoose"

const Blog_schema = new mongoose.Schema({
    mail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const Blog = mongoose.model("Blogs", Blog_schema);

export default Blog;