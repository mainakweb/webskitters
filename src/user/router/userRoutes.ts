import express, { Request, Response } from 'express';
import { sendResponse } from '../../utils/utils';

const userRouter = express.Router();

userRouter.get("/", (req: Request, res: Response) => {
    sendResponse(res, true, 200, "Successfully", []);
})




export { userRouter };
