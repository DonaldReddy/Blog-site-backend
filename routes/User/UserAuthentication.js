import { User } from "../../database/schemas/User.js"

async function newUser(email, password) {
    try {

        await User.insertMany({ email, password });
        return { status: true }

    } catch (error) {
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