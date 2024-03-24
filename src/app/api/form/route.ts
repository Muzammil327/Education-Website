import ContactForm from '@/src/models/formModel'
import connectDB from '@/src/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.json()

  const { fname, lname, url, email, message } = formData

  await connectDB()

  if (!fname) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'First Name is Required.',
    })
  }

  if (!lname) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Last Name is Required.',
    })
  }

  if (!email) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Email is Required.',
    })
  }

  if (!message) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Message is Required.',
    })
  }

  const contactform = new ContactForm({
    fname,
    lname,
    url,
    email,
    message,
  })
  const user = await contactform.save()

  try {
    return NextResponse.json({
      success: true,
      message: 'Message Successfully!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Message',
      error,
    })
  }
}
