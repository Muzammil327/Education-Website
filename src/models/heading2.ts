/* eslint-disable prettier/prettier */
import mongoose, { Document } from 'mongoose'

interface IDocument extends Document {
  title: string
  description: string
  keyword: [string]
  slug: string
  bookName: string
  heading1: string
}

const Heading2Schema = new mongoose.Schema<IDocument>({
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
  keyword: {
    type: [String],
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
})

const Heading2 =
  mongoose.models.Heading2 ||
  mongoose.model<IDocument>('Heading2', Heading2Schema)
export default Heading2
