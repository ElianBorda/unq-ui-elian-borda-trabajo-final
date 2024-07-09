import React from 'react'
import VideoPreguntados from '../components/VideoPreguntados'
import DifficultyCard from '../components/DifficultyCard'

const LandingPage = () => {
  return (
    <div className='ce'>
        <div className='ce temp-body'>
          <VideoPreguntados/>
          <DifficultyCard/> 
        </div>
    </div>
  )
}

export default LandingPage