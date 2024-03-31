import Newsletter from '@/src/models/newsletterModel'
import connectDB from '@/src/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.json()

  const { email } = formData

  await connectDB()

  if (!email) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Email is Required.',
    })
  }

  try {
    // Check if the email already exists
    const existingNewsletter = await Newsletter.findOne({ email })

    if (existingNewsletter) {
      return NextResponse.json({
        status: 400,
        success: false,
        error: 'Your Email already exists.',
      })
    }

    const NewsletterData = new Newsletter({
      email,
    })
    const user = await NewsletterData.save()
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
