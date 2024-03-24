'use client'

import React, { useState, useEffect } from 'react'
import FileDownloader from '@/src/components/elements/FileDownloader/page'

export default function FileShow(props: {
  fileName: string
  fileUrl: string
  fileId: string
}) {
  // const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState(false)

  // useEffect(() => {
  //   const handleIframeLoad = () => {
  //     setIsLoading(false)
  //   }

  //   const handleIframeError = () => {
  //     setError(true)
  //   }

  //   const iframeElement = document.getElementById('fileIframe')

  //   if (iframeElement) {
  //     iframeElement.addEventListener('load', handleIframeLoad)
  //     iframeElement.addEventListener('error', handleIframeError)
  //   }

  //   return () => {
  //     if (iframeElement) {
  //       iframeElement.removeEventListener('load', handleIframeLoad)
  //       iframeElement.removeEventListener('error', handleIframeError)
  //     }
  //   }
  // }, [])

  return (
    <>
      {/* {isLoading && !error && (
        <div className="bg-animation-container">
          <div className="bg-animation">Loading...</div>
        </div>
      )}
      {error && <div>Error: Failed to load the file.</div>} */}
      {/* <iframe
        src={props.fileId}
        allow="autoplay"
        allowFullScreen
        id="fileIframe"
        className={`w-full px-2 lg:h-[900px] md:h-[800] h-[600px] ${isLoading || error ? 'hidden' : ''}`}
        height={900}
        width={900}
      /> */}
      <FileDownloader
        fileId={props.fileId}
        fileName={props.fileName}
        text="Download 9th Punjab Biology Books English Medium"
      />
    </>
  )
}
