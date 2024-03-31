import heading2 from '@/src/models/heading2'
import connectDB from '@/src/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.json()

  const { title, description, keyword, slug, bookName, heading1 } = formData
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
  if (!heading1) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Heading 1 is Required.',
    })
  }
  if (!bookName) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Book Name is Required.',
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
    const McqsData = new heading2({
      title: formData.title,
      description: formData.description,
      keyword: formData.keyword,
      slug: formData.slug,
      heading1: formData.heading1,
      bookName: formData.bookName,
    })

    const user = await McqsData.save()

    return NextResponse.json({
      success: true,
      message: 'Heading 2 Successfully Creating!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Heading 2 Creating!',
      error,
    })
  }
}

export async function GET(req: NextRequest) {
  await connectDB()

  try {
    const user = await heading2.find()
    return NextResponse.json({
      success: true,
      message: 'Heading 2 Successfully Getting!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Heading 2 Getting.',
      error,
    })
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')

  await connectDB()

  try {
    const user = await heading2.findByIdAndDelete(id)
    return NextResponse.json({
      success: true,
      message: 'Heading 2 Successfully Deleting!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Heading 2 Deleting!.',
      error,
    })
  }
}
