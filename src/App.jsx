import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import WordsPage from "./pages/words/WordsPage";
import StoryPage from "./pages/story/StoryPage";
import QuizzesPage from "./pages/games/quiz/QuizzesPage";
import QuizPage from "./pages/games/quiz/QuizPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/words/1" element={<WordsPage />} />
        <Route path="/games/1" element={<QuizzesPage />} />
        <Route path="/games/1/quiz/:lessonId" element={<QuizPage />} />
        <Route path="/story/1" element={<StoryPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;