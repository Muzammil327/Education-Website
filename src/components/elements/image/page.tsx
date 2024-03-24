'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './ImageComponent.module.css'

interface ImageComponentProps {
  src: string
  alt: string
  height: number
  width: number
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  height,
  width,
}) => {
  const [loading, setLoading] = useState(true)

  const handleImageLoad = () => {
    setLoading(false)
  }

  return (
    <div className={styles.container}>
      {loading && (
        <div className={styles.loadingAnimation}>
          <div className={styles.spinner}></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        onLoad={handleImageLoad}
        onError={() => setLoading(false)}
      />
    </div>
  )
}

export default ImageComponent
