import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoriesPage from "./Stories";
import Words from "./words/Main";
import { Quiz } from "./games/quiz/Quiz";
import { questions } from "./games/questions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StoriesPage />} />
        <Route path="/words/:id" element={<Words />} />
        <Route path="/games/:id" element={<Quiz quiz={questions} timer={240}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
