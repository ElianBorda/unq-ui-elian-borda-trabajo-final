import React from 'react'

const VideoPreguntados = () => {
  return (
    <>
    <video
        className='video-preguntados'
        autoPlay
        loop
        muted
        >
          <source 
            src="./../../public/videos/vidpre.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className='dark-overlay'></div>
    </>
  )
}

export default VideoPreguntados