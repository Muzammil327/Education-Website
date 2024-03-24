import Link from 'next/link'
import React from 'react'
import EnglishComp from './FileShow'
import Form from '@/src/components/elements/form/page'

interface Iprops {
  id: number
  title: String
  link: string
}

export default function BookPageLayout(props: {
  para: string
  head: string
  tableData: Iprops[]
  tableC1: string
  tableC2: string
  url: string
}) {
  return (
    <>
      <p className="my-5">{props.para}</p>
      <h2 className="text-xl font-semibold py-2">{props.head}</h2>
      <div className="relative overflow-x-auto my-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                {props.tableC1}
              </th>
              <th scope="col" className="px-6 py-3">
                {props.tableC2}
              </th>
            </tr>
          </thead>
          <tbody>
            {props.tableData.map((data: Iprops) => {
              return (
                <>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Chapters {data.id}
                    </th>
                    <td className="px-6 py-4">
                      <Link href={data.link} title={`${data.title}`}>
                        {data.title}
                      </Link>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
        <EnglishComp
          fileName="class-9-punjab-board-biology-book-english-medium.pdf"
          fileUrl="https://drive.google.com/file/d/1F24QG0BJ0mLsu3PBgLEM7sBcqPovhYk0/preview"
          fileId="/book/9th/punjab/biology/english/class-9-punjab-board-biology-book-english-medium.pdf"
        />
        <Form url={props.url} />
      </div>
    </>
  )
}
