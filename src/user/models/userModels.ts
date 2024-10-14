import mongoose, { Schema, Model, model } from "mongoose";

interface User {
    name: string,
    age: number,
    sex: string,
}

const userSchema = new Schema<User>({
    name: { type: String, required: true },
    age: { type: Number },
    sex: { type: String },
});

const UserModel = model<User>("User", userSchema);

export {
    UserModel
}