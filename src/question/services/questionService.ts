import { UpdateQuery, FilterQuery, QueryOptions } from 'mongoose';
import { IQuestion, QuestionModel } from '../models/questionModel';

export function findQsn(query: FilterQuery<IQuestion>, options: QueryOptions = { lean: true }) {
    return QuestionModel.find({})
}
export function createQuestions(input: IQuestion): Promise<IQuestion> {

    console.log("input", input);

    const qsn = new QuestionModel(input); // Create a new instance of the user
    return qsn.save(); // Save it to the database and return the result as a promise
}

export function findAndUpdate(query: FilterQuery<IQuestion>, update: UpdateQuery<IQuestion>, options: QueryOptions) {
    return QuestionModel.findOneAndUpdate(query, update, options)
}
