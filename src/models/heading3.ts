/* eslint-disable prettier/prettier */
import mongoose, { Document } from 'mongoose'

interface IDocument extends Document {
  title: string
  description: string
  keyword: [string]
  slug: string
  bookName: string
  heading1: string
  heading2: string
}

const Heading3Schema = new mongoose.Schema<IDocument>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bookName: {
    type: String,
    required: true,
  },
  heading1: {
    type: String,
    required: true,
  },
  heading2: {
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

const Heading3 =
  mongoose.models.Heading3 ||
  mongoose.model<IDocument>('Heading3', Heading3Schema)
export default Heading3
