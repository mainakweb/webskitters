import mongoose, { Schema, Model, model , Document} from "mongoose";


interface IUserDocument extends Document {
    name: string,
    age: number,
    sex: string,
}
interface IUser {
    name: string,
    age: number,
    sex: string,
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    age: { type: Number },
    sex: { type: String },
});

const UserModel = model<IUser>("User", userSchema);

export {
    UserModel, IUserDocument, IUser
}