import express, { Request, Response } from 'express';
import { userLogin, allUsers, newUser, updateUser, viewProfile } from '../controllers/userControler';
import { authMiddleware } from '../middlewares/authMiddleware';
const userRouter = express.Router();

userRouter.post('/login', userLogin);
userRouter.get("/", [], allUsers);
userRouter.post("/new", [], newUser);
userRouter.post("/update", [], updateUser);
userRouter.get('/profile/', [authMiddleware], viewProfile);


export { userRouter };
