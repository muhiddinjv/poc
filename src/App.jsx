import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stories from "./pages/Stories";
import NoPage from "./pages/NoPage";
import Words from "./words/Main";
import { Quiz } from "./games/quiz/Quiz";
import Story from "./pages/Story";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Stories />} />
        <Route path="/words/:id" element={<Words />} />
        <Route path="/games/:id" element={<Quiz />} />
        <Route path="/story/:id" element={<Story />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
