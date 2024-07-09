import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { getQuestions } from '../service/api'
import { useQuestions } from '../context/QuestionsContext'
import { usePoint } from '../context/PointContext'

const QuestionPage = () => {
    const { difficulty } = useParams()
    const { setQuestions, questions } = useQuestions()
    const { points } = usePoint()

    useEffect(() => {
        getQuestions(difficulty).then(({ data }) => {
            setQuestions(data) 
        })
    },[difficulty])

  return (
    <div className='question'>
      { 
        questions ? 
          <>
            <p className='tilt-warp-font'>Puntos: {points}</p>
            <Outlet/>
          </> : 
          <p>Cargando...</p>
      }
        
    </div>
  )
}

export default QuestionPage