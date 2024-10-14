import express, { Request, Response } from 'express';
import { allUsers, newUser } from '../controllers/userControler';
const userRouter = express.Router();

userRouter.get("/", [], allUsers);
userRouter.post("/new", [], newUser);




export { userRouter };
