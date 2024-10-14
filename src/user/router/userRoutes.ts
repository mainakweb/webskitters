import express, { Request, Response } from 'express';
import { allUsers } from '../controllers/userControler';
const userRouter = express.Router();

userRouter.get("/new", [], allUsers)




export { userRouter };
