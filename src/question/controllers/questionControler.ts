import express, { Request, Response } from 'express';
import { sendResponse } from '../../utils/utils';
import { createQuestions, findAndUpdate, findQsn } from '../services/questionService';




// User login controller
const view = async (req: Request, res: Response) => {
    try {
      const result = await findQsn({})
      sendResponse(res, true, 200, "User Login successfully", result);
    } catch (error) {
        sendResponse(res, false, 500, "somthing went wrong!", error);
    }
  };

const bulkupload = async (req: Request, res: Response) => {

    // let user = await UserModel.find({});
    sendResponse(res, true, 200, "Successfully fetched users", []);
}

const add = async (req: Request, res: Response) => {
  
    try {

        console.log("req.body)req.body)", req.body);

        // Check if the user already exists
        const addQuestion = await createQuestions(req.body)
    
        sendResponse(res, true, 200, "User registered successfully", []);

    } catch (error) {
        sendResponse(res, false, 200, "somthing went wrong!", error);

    }

}
// const update = async (req: Request, res: Response) => {

//     try {

//         console.log("req.body)req.body)", req.body);
//         const { name, age, sex } = req.body;

//         const resp = await findAndUpdate({ age, sex }, { name }, { upsert: true })
//         sendResponse(res, true, 200, "Successfully fetched users", resp);

//     } catch (error) {
//         sendResponse(res, false, 200, "fetched users error", error);

//     }

// }




export {
  add,
  view,
  bulkupload
  
    
}