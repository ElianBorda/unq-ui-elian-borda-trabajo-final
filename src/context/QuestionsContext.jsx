import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const QuestionsContext = createContext()

export const QuestionsProvider = ({children}) => {
    const [ questions, setQuestions ] = useState([])
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ failedQuestion, setFailedQuestion ] = useState(0)
    const [ difficultyQuestion, setDifficultyQuestion ] = useState('')
    const navigate = useNavigate()

    const nextQuestion = () => {
      setCurrentQuestion(currentQuestion + 1)
      if (currentQuestion === questions.length - 1) {
        setCurrentQuestion(0)
        navigate('/question/endgame')
      } else{
        goQuestion()
      }
    }

    const goQuestion = () => {
      navigate(`/question/${difficultyQuestion}/${currentQuestion+1}`)
    }

    const failQuestion = () => setFailedQuestion(failedQuestion + 1)

    const initFailedQuestion = () => {
        
        setFailedQuestion(0)
    }

  return (
    <QuestionsContext.Provider value={{ failedQuestion, questions, setQuestions, currentQuestion, nextQuestion, failQuestion, setDifficultyQuestion, difficultyQuestion, goQuestion, initFailedQuestion }}>
      {children}
    </QuestionsContext.Provider>
  )
}

export const useQuestions = () => useContext(QuestionsContext)
