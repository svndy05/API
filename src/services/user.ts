import { User } from "../database/models/user";
export const signUp = async (formData: { name: string, firstname: string, email: string, }) => {
    const user = new User(formData)
    try {
        await user.save()
        return 201
    }
    catch (err) {
        console.log(err)
        return 400

    }
}