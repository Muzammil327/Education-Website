/* eslint-disable prettier/prettier */
import mongoose, { Document } from 'mongoose'

interface UserDocument extends Document {
  email: string
}

const FormSchema = new mongoose.Schema<UserDocument>({
  email: {
    type: String,
    required: true,
  },
})

export const ContactForm =
  mongoose.models.ContactForm ||
  mongoose.model<UserDocument>('ContactForm', FormSchema)

export default ContactForm
