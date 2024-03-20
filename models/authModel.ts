/* eslint-disable prettier/prettier */
import mongoose, { Document } from 'mongoose'

interface UserDocument extends Document {
  fname: string
  lname: string
  email: string
  url: string
  message: string
}

const FormSchema = new mongoose.Schema<UserDocument>(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const Form =
  mongoose.models.ContactForm ||
  mongoose.model<UserDocument>('Form', FormSchema)

export default Form
