import mongoose from "mongoose"

async function dbConnect() {

    const USER = process.env.USER
    const PASSWORD = process.env.PASSWORD

    const URL = `mongodb+srv://${USER}:${PASSWORD}@cluster0.ua9gngy.mongodb.net/blog`

    try {
        await mongoose.connect(URL);
        console.log("connected to DataBase");
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect;