import QuizHeading2 from '@/src/components/quiz/heading2/page'
import heading3 from '@/src/models/heading3'
import connectDB from '@/src/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.json()

  const { title, description, keyword, slug, bookName, heading1, heading2 } =
    formData
  await connectDB()

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
  if (!bookName) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Book Name is Required.',
    })
  }
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

  if (!slug) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Slug is Required.',
    })
  }

  try {
    const McqsData = new heading3({
      title: formData.title,
      description: formData.description,
      keyword: formData.keyword,
      slug: formData.slug,
      bookName: formData.bookName,
      heading1: formData.heading1,
      heading2: formData.heading2,
    })

    const user = await McqsData.save()

    return NextResponse.json({
      success: true,
      message: 'Heading 3 Successfully Creating!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Heading 3 Creating!',
      error,
    })
  }
}

export async function GET(req: NextRequest) {
  await connectDB()

  try {
    const user = await heading3.find()
    return NextResponse.json({
      success: true,
      message: 'Heading 3 Successfully Getting!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Heading 3 Getting.',
      error,
    })
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')

  await connectDB()

  try {
    const user = await heading3.findByIdAndDelete(id)
    return NextResponse.json({
      success: true,
      message: 'Heading 3 Successfully Deleting!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Heading 3 Deleting!.',
      error,
    })
  }
}
