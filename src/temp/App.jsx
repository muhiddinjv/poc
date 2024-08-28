import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { GoogleLogin, googleLogout, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import Stories from "../pages/Stories";
import NoPage from "../pages/NoPage";
import Words from "../words/Words";
import Quiz from "../games/quiz/Quiz";
import Story from "../pages/Story";


const ProtectedRoute = ({ children, user }) => {
  return user ? children : <Navigate to="/signin" />;
};

const SignIn = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    console.log({decoded});
    onLoginSuccess({
      name: decoded.name,
      picture: decoded.picture,
    });

    // Navigate to the home page or the desired page after login
    navigate('/');
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={() => alert('Login Failed')}
      />
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignOut = () => {
    googleLogout(); // Logs out the user from Google
    setUser(null); // Clears the user state
  };

  return (
    <GoogleOAuthProvider clientId="815159178082-j4088erdlh4e2agrg1jn0f4jl9ig8oeu.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
        <Route
            path="/signin"
            element={<SignIn onLoginSuccess={setUser} />}
          />
          <Route
            index
            element={
              <ProtectedRoute user={user}>
                <Stories user={user} handleSignOut={handleSignOut} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/words/:id"
            element={
              <ProtectedRoute user={user}>
                <Words />
              </ProtectedRoute>
            }
          />
          <Route
            path="/games/:id"
            element={
              <ProtectedRoute user={user}>
                <Quiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/story/:id"
            element={
              <ProtectedRoute user={user}>
                <Story />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;

