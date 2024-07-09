import React, { useEffect, useState } from 'react'
import { getDifficulty } from '../service/api'
import { useNavigate } from 'react-router-dom'
import { useQuestions } from '../context/QuestionsContext'

const DifficultyCard = () => {
    const [difficultys, setDifficultys] = useState([])
    const { setDifficultyQuestion } = useQuestions()
    const navigate = useNavigate()

    useEffect(() => {
        getDifficulty().then(({ data }) => {
            setDifficultys(data)
        })
    },[])


  return (
    <div className='difficulty-card'>
        <h1 className='tilt-warp-font title'>¡Bienvenido a Preguntados!</h1>
        <div className='description-card'>
            <p className='tilt-warp-font description'>El juego de preguntas y respuestas más popular del mundo.</p>
            <div className='gp'>
                <p className='tilt-warp-font description'>Elige la dificultad</p>
                <div className='container-btn'>
                    {difficultys.map((difficulty) => (
                        <button key={difficulty} onClick={() => {
                            navigate(`/question/${difficulty}/1`)
                            setDifficultyQuestion(difficulty)
                        }} className='btn-preguntados'>{difficulty}</button>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default DifficultyCard