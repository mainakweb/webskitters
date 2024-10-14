import express, { Request, Response } from 'express';
import { add, view } from '../controllers/questionControler';

const questionRouter = express.Router();


questionRouter.get('/', [], view);
questionRouter.post('/add', [], add);


export { questionRouter };
