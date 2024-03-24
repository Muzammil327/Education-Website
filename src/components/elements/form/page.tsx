'use client'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import style from './form.module.css'
export default function Form(props: { url: string }) {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    url: props.url,
    message: '',
  })

  const SubmitHandle = async (e: any) => {
    e.preventDefault()

    try {
      const res = await axios.post(`/api/form`, data)
      setData({
        fname: '',
        lname: '',
        email: '',
        url: props.url,
        message: '',
      })
      toast.success(res.data.message)
    } catch (error) {
      toast.warning('Error during Task Update')
    }
  }
  return (
    <div className="my-20">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Comment Here
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Any Correctness in website. plz comment below.
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={SubmitHandle}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className={style.label}>
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="first-name"
                className={style.input}
                value={data.fname}
                onChange={(e) => setData({ ...data, fname: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className={style.label}>
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                value={data.lname}
                onChange={(e) => setData({ ...data, lname: e.target.value })}
                id="last-name"
                autoComplete="last-name"
                className={style.input}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className={style.label}>
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                autoComplete="email"
                className={style.input}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="url" className={style.label}>
              Url
            </label>
            <div className="mt-2.5">
              <input
                type="url"
                value={props.url}
                onChange={(e) => setData({ ...data, url: e.target.value })}
                name="url"
                id="url"
                disabled
                className={style.input}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className={style.label}>
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                maxLength={1000}
                className={style.input}
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className={style.btn}>
            Submit Here
          </button>
        </div>
      </form>
    </div>
  )
}
