import React from 'react'
import { useQuestions } from '../context/QuestionsContext'
import { usePoint } from '../context/PointContext'
import { useNavigate } from 'react-router-dom'

const EndGamePage = () => {
    const navigate = useNavigate()
    const { failedQuestion, goQuestion, initFailedQuestion } = useQuestions()
    const { points, initPoints } = usePoint()

  return (
    <div className='ce temp-body gp2'>
        <div className='card-endgame'>
            <p className='tilt-warp-font title'>Preguntas incorrectas</p>
            <p className='tilt-warp-font title'>{failedQuestion}</p>    
        </div> 
        <div className='card-endgame'>
            <p className='tilt-warp-font title'>Puntos obtenidos</p>
            <p className='tilt-warp-font title'>{points}</p>  
        </div>
        <div className='card-endgame2'>
            <button onClick={() => {
                initPoints()
                initFailedQuestion()
                goQuestion()
            }} className='btn-preguntados btn-question'>Volver a jugar</button>
            <button onClick={() => {
                initPoints()
                initFailedQuestion()
                navigate('/')
            }} className='btn-preguntados btn-question'>Volver al home</button>
        </div>
    </div>
  )
}

export default EndGamePage