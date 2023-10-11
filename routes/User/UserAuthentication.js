import { User } from "../../database/schemas/User.js"

async function newUser(email, password) {
    try {

        const user = await User.findOne({ email: email });

        if (user) return { status: false, error: "Email already in use" }

        await User.insertMany({ email, password });
        return { status: true }

    } catch (error) {
        console.log(error.message);
        return { status: false, error: error }
    }
}

async function loginUser(email, password) {
    try {
        const user = await User.findOne({ email: email });

        if (user.password === password)
            return { status: true };
        return { status: false, error: "Wrong Password" };

    } catch (error) {
        return { status: false, error: error };
    }
}

export { newUser, loginUser }