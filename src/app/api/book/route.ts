/* eslint-disable prettier/prettier */
import Book from '@/src/models/bookModel'
import connectDB from '@/src/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.json()

  const { title, description, keyword, slug } = formData
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

  if (!slug) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: 'Slug is Required.',
    })
  }

  try {
    const McqsData = new Book({
      title: formData.title,
      description: formData.description,
      keyword: formData.keyword,
      slug: formData.slug,
    })

    const user = await McqsData.save()

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

export async function GET(req: NextRequest) {
  await connectDB()

  try {
    const data = await Book.find()
    return NextResponse.json({
      success: true,
      message: 'Book Successfully Created!',
      book: data,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Book Creating.',
      error,
    })
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')

  await connectDB()

  try {
    const user = await Book.findByIdAndDelete(id)
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
