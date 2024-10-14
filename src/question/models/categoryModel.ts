import mongoose, { Document, model } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  id: number;
}

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  id: { type: Number, required: true, unique: true }
});

// export default mongoose.model<ICategory>('Category', CategorySchema);

export const QuestionModel = model<ICategory>('Category', CategorySchema);
 
