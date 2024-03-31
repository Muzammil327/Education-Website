import heading1 from '@/src/models/heading1'
import connectDB from '@/src/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.json()

  const { title, description, keyword, slug, bookName } = formData
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
  if (!bookName) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Book Name is Required.',
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
    const McqsData = new heading1({
      title: formData.title,
      description: formData.description,
      keyword: formData.keyword,
      slug: formData.slug,
      bookName: formData.bookName,
    })

    const user = await McqsData.save()

    return NextResponse.json({
      success: true,
      message: 'Heading 1 Successfully Creating!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Heading 1 Creating!',
      error,
    })
  }
}

export async function GET(req: NextRequest) {
  await connectDB()

  try {
    const user = await heading1.find()
    return NextResponse.json({
      success: true,
      message: 'Heading 1 Successfully Getting!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Heading 1 Getting.',
      error,
    })
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')

  await connectDB()

  try {
    const user = await heading1.findByIdAndDelete(id)
    return NextResponse.json({
      success: true,
      message: 'Heading 1 Successfully Deleting!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Heading 1 Deleting!.',
      error,
    })
  }
}
