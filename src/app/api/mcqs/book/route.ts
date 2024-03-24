/* eslint-disable prettier/prettier */
import BookQuiz from '@/src/models/bookModel'
import connectDB from '@/src/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.json()

  const { title, description, keyword } = formData

  await connectDB()

  if (!title) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: 'Title is Required.',
    })
  }

  if (!description) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: 'Description is Required.',
    })
  }

  if (!keyword) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: 'Keyword is Required.',
    })
  }

  const BookQuizpost = new BookQuiz({
    title,
    description,
    keyword,
  })
  const user = await BookQuizpost.save()

  try {
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
