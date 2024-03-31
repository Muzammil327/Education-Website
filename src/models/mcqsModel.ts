/* eslint-disable prettier/prettier */
import mongoose, { Document } from 'mongoose'

interface IDocument extends Document {
  title: string
  description: string
  correctOption: string
  keyword: [string]
  options: [string]
  slug: string
  bookName: string
  heading1: string
  heading2: string
  heading3: string
}

const McqsSchema = new mongoose.Schema<IDocument>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  correctOption: {
    type: String,
    required: true,
  },
  keyword: {
    type: [String],
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  bookName: {
    type: String,
    required: true,
  },
  heading1: {
    type: String,
  },
  heading2: {
    type: String,
  },
  heading3: {
    type: String,
  },
})

const Mcqs =
  mongoose.models.Mcqs || mongoose.model<IDocument>('Mcqs', McqsSchema)
export default Mcqs
