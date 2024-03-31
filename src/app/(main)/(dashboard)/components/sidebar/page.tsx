'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function DashboardSidebar() {
  const currentPath = usePathname()
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
  const handleLinkClick = () => {
    setOpen(false)
  }
  return (
    <>
      {open ? (
        <>
          <section
            className={`
    bg-gradient-to-br from-gray-800 to-gray-900 inset-0 z-50 transition-transform duration-300 
    ${open ? 'w-full h-screen mt-24 lg:block hidden' : 'block h-full transition-all fixed top-0 w-8/12 left-0 md:hidden lg:hidden'}
  `}
          >
            <div className="relative border-b border-white/20">
              <div className="flex items-center gap-4 py-6 px-8">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                  Admin Dashboard
                </h6>
              </div>
              <button
                className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 h-12 rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
                type="button"
                onClick={handleLinkClick}
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <div className="m-4">
              <ul className="mb-4 flex flex-col gap-1">
                <li>
                  <Link href={'/dashboard/'}>
                    <button
                      className={`
                  middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
                  ${currentPath === '/dashboard/' ? 'bg-blue-500' : ''}
                `}
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5 text-inherit"
                      >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        dashboard
                      </p>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/addbooks/'}>
                    <button
                      className={`
                     middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
                     ${currentPath === '/dashboard/addbooks/' ? 'bg-blue-500' : ''}
                   `}
                      type="button"
                    >
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="text-white fill-white"
                      >
                        <rect
                          width="16"
                          height="16"
                          id="icon-bound"
                          fill="none"
                        />
                        <path d="M5,12h9V0H4C2.9,0,2,0.9,2,2v12c0,1.1,0.9,2,2,2h10v-2H5c-0.6,0-1-0.4-1-1S4.4,12,5,12z M5,2h7v2H5V2z" />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Add Books
                      </p>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/heading1/'}>
                    <button
                      className={`
                     middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
                     ${currentPath === '/dashboard/heading1/' ? 'bg-blue-500' : ''}
                   `}
                      type="button"
                    >
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="text-white fill-white"
                      >
                        <rect
                          width="16"
                          height="16"
                          id="icon-bound"
                          fill="none"
                        />
                        <path d="M5,12h9V0H4C2.9,0,2,0.9,2,2v12c0,1.1,0.9,2,2,2h10v-2H5c-0.6,0-1-0.4-1-1S4.4,12,5,12z M5,2h7v2H5V2z" />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Add Heading 1
                      </p>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/heading2/'}>
                    <button
                      className={`
                     middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
                     ${currentPath === '/dashboard/heading2/' ? 'bg-blue-500' : ''}
                   `}
                      type="button"
                    >
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="text-white fill-white"
                      >
                        <rect
                          width="16"
                          height="16"
                          id="icon-bound"
                          fill="none"
                        />
                        <path d="M5,12h9V0H4C2.9,0,2,0.9,2,2v12c0,1.1,0.9,2,2,2h10v-2H5c-0.6,0-1-0.4-1-1S4.4,12,5,12z M5,2h7v2H5V2z" />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Add Heading 2
                      </p>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/heading3/'}>
                    <button
                      className={`
                     middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
                     ${currentPath === '/dashboard/heading3/' ? 'bg-blue-500' : ''}
                   `}
                      type="button"
                    >
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="text-white fill-white"
                      >
                        <rect
                          width="16"
                          height="16"
                          id="icon-bound"
                          fill="none"
                        />
                        <path d="M5,12h9V0H4C2.9,0,2,0.9,2,2v12c0,1.1,0.9,2,2,2h10v-2H5c-0.6,0-1-0.4-1-1S4.4,12,5,12z M5,2h7v2H5V2z" />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Add Heading 3
                      </p>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/addmcqs/'}>
                    <button
                      className={`
                     middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
                     ${currentPath === '/dashboard/addmcqs/' ? 'bg-blue-500' : ''}
                   `}
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5 text-inherit"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Add Mcqs
                      </p>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </>
      ) : (
        <>
          <section
            className={`
    bg-gradient-to-br from-gray-800 to-gray-900 inset-0 z-50 transition-transform duration-300 
    ${open ? 'w-full h-screen mt-24 lg:block hidden' : 'block h-full transition-all fixed top-0 w-8/12 left-0 md:hidden lg:hidden'}
  `}
          >
            <div className="relative border-b border-white/20">
              <div className="flex items-center gap-4 py-6 px-8">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                  Admin Dashboard
                </h6>
              </div>
              <button
                className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 h-12 rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
                type="button"
                onClick={handleLinkClick}
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <div className="m-4">
              <ul className="mb-4 flex flex-col gap-1">
                <li>
                  <Link href={'/dashboard/'}>
                    <button
                      className={`
                  middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
                  ${currentPath === '/dashboard/' ? 'bg-blue-500' : ''}
                `}
                      type="button"
                      onClick={() => setOpen(!open)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5 text-inherit"
                      >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        dashboard
                      </p>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/addbooks/'}>
                    <button
                      className={`
                     middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
                     ${currentPath === '/dashboard/addbooks/' ? 'bg-blue-500' : ''}
                   `}
                      type="button"
                      onClick={() => setOpen(!open)}
                    >
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="text-white fill-white"
                      >
                        <rect
                          width="16"
                          height="16"
                          id="icon-bound"
                          fill="none"
                        />
                        <path d="M5,12h9V0H4C2.9,0,2,0.9,2,2v12c0,1.1,0.9,2,2,2h10v-2H5c-0.6,0-1-0.4-1-1S4.4,12,5,12z M5,2h7v2H5V2z" />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Add Books
                      </p>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/heading1/'}>
                    <button
                      className={`
                     middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
                     ${currentPath === '/dashboard/heading1/' ? 'bg-blue-500' : ''}
                   `}
                      type="button"
                      onClick={() => setOpen(!open)}
                    >
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="text-white fill-white"
                      >
                        <rect
                          width="16"
                          height="16"
                          id="icon-bound"
                          fill="none"
                        />
                        <path d="M5,12h9V0H4C2.9,0,2,0.9,2,2v12c0,1.1,0.9,2,2,2h10v-2H5c-0.6,0-1-0.4-1-1S4.4,12,5,12z M5,2h7v2H5V2z" />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Add Heading 1
                      </p>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/heading2/'}>
                    <button
                      className={`
                     middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
                     ${currentPath === '/dashboard/heading2/' ? 'bg-blue-500' : ''}
                   `}
                      type="button"
                      onClick={() => setOpen(!open)}
                    >
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="text-white fill-white"
                      >
                        <rect
                          width="16"
                          height="16"
                          id="icon-bound"
                          fill="none"
                        />
                        <path d="M5,12h9V0H4C2.9,0,2,0.9,2,2v12c0,1.1,0.9,2,2,2h10v-2H5c-0.6,0-1-0.4-1-1S4.4,12,5,12z M5,2h7v2H5V2z" />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Add Heading 2
                      </p>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/heading3/'}>
                    <button
                      className={`
                     middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
                     ${currentPath === '/dashboard/heading3/' ? 'bg-blue-500' : ''}
                   `}
                      type="button"
                      onClick={() => setOpen(!open)}
                    >
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="text-white fill-white"
                      >
                        <rect
                          width="16"
                          height="16"
                          id="icon-bound"
                          fill="none"
                        />
                        <path d="M5,12h9V0H4C2.9,0,2,0.9,2,2v12c0,1.1,0.9,2,2,2h10v-2H5c-0.6,0-1-0.4-1-1S4.4,12,5,12z M5,2h7v2H5V2z" />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Add Heading 3
                      </p>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/addmcqs/'}>
                    <button
                      className={`
                     middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
                     ${currentPath === '/dashboard/addmcqs/' ? 'bg-blue-500' : ''}
                   `}
                      type="button"
                      onClick={() => setOpen(!open)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5 text-inherit"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Add Mcqs
                      </p>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </>
      )}

      <button
        onClick={handleClick}
        className="fixed top-20 right-0 lg:hidden block p-2 rounded-md bg-indigo-500 text-sm"
      >
        {open ? (
          <>
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6H20M4 12H20M4 18H20"
              />
            </svg>
          </>
        ) : (
          <>
            <span>close</span>
          </>
        )}
      </button>
    </>
  )
}
