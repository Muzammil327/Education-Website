/* eslint-disable prettier/prettier */
import Mcqs from '@/src/models/mcqsModel'
import connectDB from '@/src/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, context: any) {
  const slug = context.params.slug

  await connectDB()

  try {
    const user = await Mcqs.findOne({ slug: slug })
    console.log(user)
    return NextResponse.json({
      success: true,
      message: 'Book Successfully Created!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Book Creating.',
      error,
    })
  }
}
