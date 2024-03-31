/* eslint-disable prettier/prettier */
import mongoose, { Document } from 'mongoose'

interface IDocument extends Document {
  title: string
  description: string
  keyword: [string]
  slug: string
}

const BookSchema = new mongoose.Schema<IDocument>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keyword: {
    type: [String],
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
})

const Book =
  mongoose.models.Book || mongoose.model<IDocument>('Book', BookSchema)
export default Book
