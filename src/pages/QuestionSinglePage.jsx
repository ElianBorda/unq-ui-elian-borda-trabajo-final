import React, { useEffect, useState } from 'react'
import { postAnswer } from '../service/api'
import { useQuestions } from '../context/QuestionsContext'
import { usePoint } from '../context/PointContext'
import { useParams } from 'react-router-dom'

const QuestionSinglePage = () => {

    const { questions, currentQuestion, nextQuestion, failQuestion } = useQuestions()
    const { addPoints } = usePoint()
    const {id , question, option1, option2, option3, option4} = questions[currentQuestion] ? questions[currentQuestion] : {id: '', question: '', option1: '', option2: '', option3: '', option4: ''}
    const [optionclicked, setOptionClicked] = useState({option: '', answer: null})

    const sendAnswer = (option) => {

        postAnswer(id, option).then(({ data: {answer} }) => {
            answer ? addPoints() : failQuestion()
            setOptionClicked({option: option, answer: answer})
            setTimeout(() => {
                nextQuestion()
                setOptionClicked({option: '', answer: null})
            }, 1000)
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
                className={`btn-preguntados
                           btn-question 
                           ${
                                optionclicked.option === 'option1' ? 
                                optionclicked.answer ? 'true-answer' : 'false-answer' : ''
                           }`}>
                <p className='tilt-warp-font'>{option1}</p>
            </button>
            <button 
                onClick={() => sendAnswer('option2')} 
                className={`btn-preguntados
                            btn-question 
                            ${
                                optionclicked.option === 'option2' ? 
                                optionclicked.answer ? 'true-answer' : 'false-answer' : ''
                            }`}>
                <p className='tilt-warp-font'>{option2}</p>
            </button>
            <button 
                onClick={() => sendAnswer('option3')} 
                className={`btn-preguntados
                            btn-question 
                            ${
                                optionclicked.option === 'option3' ? 
                                optionclicked.answer ? 'true-answer' : 'false-answer' : ''
                            }`}>
                <p className='tilt-warp-font'>{option3}</p>
            </button>
            <button 
                onClick={() => sendAnswer('option4')} 
                className={`btn-preguntados
                            btn-question 
                            ${
                                optionclicked.option === 'option4' ? 
                                optionclicked.answer ? 'true-answer' : 'false-answer' : ''
                            }`}>
                <p className='tilt-warp-font'>{option4}</p>
            </button>
        </div>
    </div>
  )
}

export default QuestionSinglePage