import express, { Request, Response } from 'express';
import { sendResponse } from '../../utils/utils';
import { UserModel } from '../models/userModels';


const allUsers = async (req: Request, res: Response) => {

    let user = await UserModel.find({});
    sendResponse(res, true, 200, "Successfully", user);
}


export {
    allUsers
}