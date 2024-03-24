'use client'
import React, { useState } from 'react'
import FileDownloader from '@/src/components/elements/FileDownloader/page'

export default function EnglishComp() {
  const [isLoading, setIsLoading] = useState(true)
  const fileName = 'class-9-punjab-board-biology-book-english-medium.pdf'
  const fileId = './class-9-punjab-board-biology-book-english-medium.pdf'

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && (
        <div className="bg-animation-container">
          <div className="bg-animation">Loading...</div>
        </div>
      )}
      <iframe
        src="https://drive.google.com/file/d/1F24QG0BJ0mLsu3PBgLEM7sBcqPovhYk0/preview"
        allow="autoplay"
        allowFullScreen
        className={`w-full px-2 lg:h-[900px] md:h-[800] h-[600px] ${isLoading ? 'hidden' : ''}`}
        height={900}
        width={900}
        onLoad={handleIframeLoad}
      ></iframe>
      <FileDownloader fileId={fileId} fileName={fileName} />
    </>
  )
}
