import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stories from "./pages/Stories";
import NoPage from "./pages/NoPage";
import Words from "./words/Words";
import Quiz from "./games/quiz/Quiz";
import Story from "./pages/Story";
// import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Stories />} />
        <Route path="/words/1" element={<Words />} />
        <Route path="/games/1" element={<Quiz />} />
        <Route path="/story/1" element={<Story />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
