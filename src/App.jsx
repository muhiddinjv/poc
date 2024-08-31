import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Words from "./pages/words/Words";
import Quiz from "./pages/games/quiz/Quiz";
import Story from "./pages/story/Story";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn,
} from "@clerk/clerk-react";

function PublicPages() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<RedirectToSignIn />} />
    </Routes>
  );
}

function PrivatePages() {
  return (
    <>
      {/* <nav>
        <UserButton />
      </nav> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/words/1" element={<Words />} />
        <Route path="/games/1" element={<Quiz />} />
        <Route path="/story/1" element={<Story />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SignedIn>
        <PrivatePages />
      </SignedIn>
      <SignedOut>
        <PublicPages />
      </SignedOut>
    </BrowserRouter>
  );
}

export default App;
