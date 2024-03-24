/* eslint-disable prettier/prettier */
import mongoose, { Document } from 'mongoose'

interface IDocument extends Document {
  title: string
  descripton: string
  keyword: [string]
}

const BookSchema = new mongoose.Schema<IDocument>({
  title: {
    type: String,
    required: true,
  },
  descripton: {
    type: String,
    required: true,
  },
  keyword: {
    type: [String],
    required: true,
  },
})

const BookQuiz =
  mongoose.models.BookQuiz || mongoose.model<IDocument>('BookQuiz', BookSchema)
export default BookQuiz
