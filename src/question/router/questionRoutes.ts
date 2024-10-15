import express, { Request, Response } from 'express';
import { add, addCategory, getCategory, getQsnByCat, view } from '../controllers/questionControler';

const questionRouter = express.Router();


questionRouter.get('/', [], view);
questionRouter.post('/add', [], add);
questionRouter.post('/', [], add);
questionRouter.get('/category', [], getCategory);
questionRouter.get('/qsnListByCategory', [], getQsnByCat);

questionRouter.post('/addCategory', [], addCategory);


export { questionRouter };
