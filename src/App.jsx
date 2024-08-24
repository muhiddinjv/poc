import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stories from "./pages/Stories";
import NoPage from "./pages/NoPage";
import Words from "./words/Words";
import Quiz from "./games/quiz/Quiz";
import Story from "./pages/Story";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          index
          element={
            <PrivateRoute>
              <Stories />
            </PrivateRoute>
          }
        />
        <Route
          path="/words/1"
          element={
            <PrivateRoute>
              <Words />
            </PrivateRoute>
          }
        />
        <Route
          path="/games/1"
          element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          }
        />
        <Route
          path="/story/1"
          element={
            <PrivateRoute>
              <Story />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
