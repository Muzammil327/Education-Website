'use client'
import React, { useState, ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  href: string
  className: string
  children: ReactNode // Correctly type children as ReactNode
}

const ButtonWithLoader: React.FC<ButtonProps> = ({
  href,
  className,
  children,
}) => {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true) // Set loading state to true when button is clicked
  }

  return (
    <Link href={href}>
      <button
        className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
        type="button"
        onClick={handleClick}
        disabled={loading} // Disable the button while loading
      >
        {loading ? (
          <div className="loadingAnimation">
            <div className="loader"></div>
          </div>
        ) : (
          children
        )}{' '}
      </button>
    </Link>
  )
}

export default ButtonWithLoader
