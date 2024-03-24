'use client'
import React, { useState } from 'react'
import FileDownloader from '@/src/components/elements/FileDownloader/page'

export default function FileShow(props: {
  fileName: string
  fileUrl: string
  fileId: string
}) {
  const [isLoading, setIsLoading] = useState(true)

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
        src={props.fileUrl}
        allow="autoplay"
        allowFullScreen
        className={`w-full px-2 lg:h-[900px] md:h-[800] h-[600px] ${isLoading ? 'hidden' : ''}`}
        height={900}
        width={900}
        onLoad={handleIframeLoad}
      ></iframe>
      <FileDownloader
        fileId={props.fileId}
        fileName={props.fileName}
        text="Download 9th Punjab Biology Books English Medium"
      />
    </>
  )
}
