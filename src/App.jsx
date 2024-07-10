import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import './styles/global.css' 
import NavBarPreguntados from "./components/NavBarPreguntados"
import QuestionPage from "./pages/QuestionPage"
import QuestionSinglePage from "./pages/QuestionSinglePage"
import { PointProvider } from "./context/PointContext"
import { QuestionsProvider } from "./context/QuestionsContext"
import EndGamePage from "./pages/EndGamePage"

const App = () => {

  return (
        <BrowserRouter>
            <NavBarPreguntados/>
            <QuestionsProvider>
              <PointProvider>
                <Routes>  
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="/question/:difficulty" element={<QuestionPage/>}>
                    <Route path=":numquestion" element={<QuestionSinglePage/>}/> 
                  </Route>
                  <Route path="/question/endgame" element={<EndGamePage/>}/>
                  <Route path="*" element={<h1>Not Found</h1>}/>
                </Routes>
              </PointProvider>
            </QuestionsProvider>
        </BrowserRouter>
  )
}

export default App
