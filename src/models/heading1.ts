/* eslint-disable prettier/prettier */
import mongoose, { Document } from 'mongoose'

interface IDocument extends Document {
  title: string
  description: string
  keyword: [string]
  slug: string
  bookName: string
}

const Heading1Schema = new mongoose.Schema<IDocument>({
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
  keyword: {
    type: [String],
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
})

const Heading1 =
  mongoose.models.Heading1 ||
  mongoose.model<IDocument>('Heading1', Heading1Schema)
export default Heading1
