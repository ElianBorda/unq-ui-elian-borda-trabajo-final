import React, { useEffect, useState } from 'react'
import { postAnswer } from '../service/api'
import { useQuestions } from '../context/QuestionsContext'
import { usePoint } from '../context/PointContext'
import { useParams } from 'react-router-dom'

const QuestionSinglePage = () => {

    const { questions, currentQuestion, nextQuestion, failQuestion } = useQuestions()
    const { addPoints } = usePoint()
    const {id , question, option1, option2, option3, option4} = questions[currentQuestion] ? questions[currentQuestion] : {id: '', question: '', option1: '', option2: '', option3: '', option4: ''}


    const sendAnswer = (answer) => {

        postAnswer(id, answer).then(({ data: {answer} }) => {
            answer ? addPoints() : failQuestion()
            nextQuestion()
        }).catch((error) => {
            console.log(error)
        })

    }
    
  return (
    <div className='content-question'>
        <div className='card-question'>
            <p className='tilt-warp-font title'>{question}</p>
        </div>
        <div className='card-question'>
            <button 
                onClick={() => sendAnswer('option1')} 
                className='btn-preguntados btn-question'>
                <p className='tilt-warp-font'>{option1}</p>
            </button>
            <button 
                onClick={() => sendAnswer('option2')} 
                className='btn-preguntados btn-question'>
                <p className='tilt-warp-font'>{option2}</p>
            </button>
            <button 
                onClick={() => sendAnswer('option3')} 
                className='btn-preguntados btn-question'>
                <p className='tilt-warp-font'>{option3}</p>
            </button>
            <button 
                onClick={() => sendAnswer('option4')} 
                className='btn-preguntados btn-question'>
                <p className='tilt-warp-font'>{option4}</p>
            </button>
        </div>
    </div>
  )
}

export default QuestionSinglePage