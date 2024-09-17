import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import WordsPage from "./pages/words/WordsPage";
import QuizPage from "./pages/games/quiz/QuizPage";
import StoryPage from "./pages/story/StoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/words/1" element={<WordsPage />} />
        <Route path="/games/1" element={<QuizPage />} />
        <Route path="/story/1" element={<StoryPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;