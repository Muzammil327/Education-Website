import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const EnglishComp = dynamic(() => import('@/src/components/elements/FileShow'))
const Form = dynamic(() => import('@/src/components/elements/form/page'))

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
  fileName: string
  fileUrl: string
  fileId: string
  para2: string
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
                <tr className="bg-white border-b" key={data.id}>
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
              )
            })}
          </tbody>
        </table>
        <EnglishComp
          fileName={props.fileName}
          fileUrl={props.fileUrl}
          fileId={props.fileId}
        />
        <p>{props.para2}</p>
        <Form url={props.url} />
      </div>
    </>
  )
}
