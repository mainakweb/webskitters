import express, { Request, Response } from 'express';
import { sendResponse } from '../../utils/utils';
import { UserModel } from '../models/userModels';
import { createUser } from '../services/userService';


const allUsers = async (req: Request, res: Response) => {

    let user = await UserModel.find({});
    sendResponse(res, true, 200, "Successfully fetched users", user);
}

const newUser = async (req: Request, res: Response) => {

    try {

        console.log("req.body)req.body)", req.body);
        const resp = await createUser(req.body)
        sendResponse(res, true, 200, "Successfully fetched users", resp);

    } catch (error) {
        sendResponse(res, false, 200, "fetched users error", error);

    }

}


export {
    allUsers,
    newUser
}