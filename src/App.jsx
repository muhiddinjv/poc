import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Words from "./pages/words/Words";
import QuizPage from "./pages/games/quiz/QuizPage";
import Story from "./pages/story/Story";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/words/1" element={<Words />} />
        <Route path="/games/1" element={<QuizPage />} />
        <Route path="/story/1" element={<Story />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;