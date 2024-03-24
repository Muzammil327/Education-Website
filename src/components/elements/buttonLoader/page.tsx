'use client'
import React, { useState, ReactNode } from 'react'
import Link from 'next/link'
import style from './buttonLoader.module.css'

interface ButtonProps {
  href: string
  className: string
  children: ReactNode
}

const ButtonWithLoader: React.FC<ButtonProps> = ({
  href,
  className,
  children,
}) => {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
  }

  return (
    <Link href={href}>
      <button
        className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
        type="button"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? (
          <div className={style.loadingAnimation}>
            <div className={style.loader}></div>
          </div>
        ) : (
          children
        )}{' '}
      </button>
    </Link>
  )
}

export default ButtonWithLoader
