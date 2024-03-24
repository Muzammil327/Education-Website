import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import style from './RightPostFollow.module.css'

export default function RightPostFollow() {
  return (
    <div className="rightpost">
      <div className="title">
        <h3>Follow Us</h3>
      </div>
      <div className="follow">
        <ul>
          <li className={style.facebook}>
            <Link
              href="https://web.facebook.com/"
              target="_blank"
              title="facebook"
            >
              <span className="icon">
                <FaFacebook />{' '}
              </span>
              <span className="text">Facebook</span>
            </Link>
          </li>
          <li className={style.facebook}>
            {' '}
            <a href="/" target="_blank" title="twitter">
              <span className="icon">
                <FaTwitter />{' '}
              </span>
              <span className="text">Twitter</span>
            </a>
          </li>
          <li className={style.youtube}>
            <a href="https://www.youtube.com/" target="_blank" title="youtube">
              <span className="icon">
                <FaYoutube />{' '}
              </span>
              <span className="text">YouTube</span>
            </a>
          </li>
          <li className={style.instagram}>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              title="instagram"
            >
              <span className="icon">
                <FaInstagram />{' '}
              </span>

              <span className="text">Instagram</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
