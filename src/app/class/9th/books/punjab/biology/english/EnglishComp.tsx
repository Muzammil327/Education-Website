import React, { useState } from 'react'
import FileDownloader from '@/src/components/elements/FileDownloader/page'

export default function EnglishComp() {
  const [isLoading, setIsLoading] = useState(true)
  const fileName = 'class-9-punjab-board-biology-book-english-medium.pdf'
  const fileId = './class-9-punjab-board-biology-book-english-medium.pdf'

  // Function to handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false) // Set isLoading to false once the iframe content is loaded
  }

  return (
    <>
      {isLoading && (
        <div className="bg-animation-container">
          {/* Your background animation component */}
          {/* Replace this with your actual animation */}
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
        onLoad={handleIframeLoad} // Call handleIframeLoad when the iframe is loaded
      ></iframe>
      <FileDownloader fileId={fileId} fileName={fileName} />
    </>
  )
}
