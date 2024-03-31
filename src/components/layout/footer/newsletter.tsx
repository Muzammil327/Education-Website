'use client'
import React, { useState } from 'react'
import style from './footer.module.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Newsletter() {
  const [newsletter, setNewsletter] = useState({
    email: '',
  })

  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/newsletter', newsletter)
      if (data.success === false) {
        toast.error(data.error)
      } else {
        toast.success(data.message)
        setNewsletter({
          email: '',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form className="mt-6 flex max-w-md gap-x-4" onSubmit={SubmitHandle}>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          className={style.input}
          placeholder="Enter your email"
          value={newsletter.email}
          onChange={(e) =>
            setNewsletter({ ...newsletter, email: e.target.value })
          }
        />
        <button type="submit" className={style.btn}>
          Subscribe
        </button>
      </form>
    </>
  )
}
