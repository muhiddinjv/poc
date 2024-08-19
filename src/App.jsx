import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoriesPage from "./Stories";
import Words from "./words/Main";
import { Quiz } from "./games/quiz/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StoriesPage />} />
        <Route path="/words/:id" element={<Words />} />
        <Route path="/games/:id" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
