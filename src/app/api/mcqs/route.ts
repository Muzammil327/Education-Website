import Mcqs from '@/src/models/mcqsModel'
import connectDB from '@/src/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.json()

  const {
    title,
    description,
    keyword,
    options,
    correctOption,
    slug,
    bookName,
    heading1,
    heading2,
    heading3,
  } = formData
  await connectDB()

  if (!title) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Title is Required.',
    })
  }
  if (!description) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Description is Required.',
    })
  }
  if (!keyword) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Keyword is Required.',
    })
  }

  if (!keyword || keyword.length < 1) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'At least 1 keyword are required.',
    })
  }

  if (!options) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Option is Required.',
    })
  }
  if (!options || options.length < 4) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'At least 4 options are required.',
    })
  }

  if (!correctOption) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'correct Option is Required.',
    })
  }

  if (!slug) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Slug is Required.',
    })
  }
  if (!bookName) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Book Name is Required.',
    })
  }
  if (!heading1) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Heading 1 is Required.',
    })
  }
  if (!heading2) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Heading 2 is Required.',
    })
  }
  if (!heading3) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Heading 3 is Required.',
    })
  }

  try {
    const McqsData = new Mcqs({
      title: formData.title,
      description: formData.description,
      correctOption: formData.correctOption,
      keyword: formData.keyword,
      options: formData.options,
      slug: formData.slug,
      bookName: formData.bookName,
      heading1: formData.heading1,
      heading2: formData.heading2,
      heading3: formData.heading3,
    })

    const user = await McqsData.save()

    return NextResponse.json({
      success: true,
      message: 'Mcqs Successfully Creating!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Mcqs Creating!',
      error,
    })
  }
}

export async function GET(req: NextRequest) {
  await connectDB()

  try {
    const user = await Mcqs.find()
    return NextResponse.json({
      success: true,
      message: 'Mcqs Successfully Getting!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Mcqs Getting!',
      error,
    })
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')

  await connectDB()

  try {
    const user = await Mcqs.findByIdAndDelete(id)
    return NextResponse.json({
      success: true,
      message: 'Mcqs Successfully Deleting!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Mcqs Deleting!',
      error,
    })
  }
}
