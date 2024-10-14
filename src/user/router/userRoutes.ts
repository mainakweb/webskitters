import express, { Request, Response } from 'express';
import { allUsers, newUser, updateUser } from '../controllers/userControler';
const userRouter = express.Router();

userRouter.get("/", [], allUsers);
userRouter.post("/new", [], newUser);
userRouter.post("/update", [], updateUser);


export { userRouter };
