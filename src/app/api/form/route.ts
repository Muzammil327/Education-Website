/* eslint-disable prettier/prettier */
import ContactUserForm from '@/models/authModel'
import connectDB from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.json()

  const { fname, lname, url, email, message } = formData

  await connectDB()

  if (!fname) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: 'First Name is Required.',
    })
  }

  if (!lname) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: 'Last Name is Required.',
    })
  }

  if (!email) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: 'Email is Required.',
    })
  }


  if (!message) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: 'Message is Required.',
    })
  }

  const contactform = new ContactUserForm({
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
