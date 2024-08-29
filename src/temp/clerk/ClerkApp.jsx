import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stories from "./pages/Stories";
import NoPage from "./pages/NoPage";
import Words from "./words/Words";
import Quiz from "./games/quiz/Quiz";
import Story from "./pages/Story";
import { SignIn, SignUp } from '@clerk/clerk-react';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<div className="bg-purple-500 w-full h-full flex items-center justify-center"><SignIn /></div>} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          index
          element={
            <ProtectedRoute>
              <Stories />
            </ProtectedRoute>
          }
        />
        <Route
          path="/words/:id"
          element={
            <ProtectedRoute>
              <Words />
            </ProtectedRoute>
          }
        />
        <Route
          path="/games/:id"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="/story/:id"
          element={
            <ProtectedRoute>
              <Story />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
