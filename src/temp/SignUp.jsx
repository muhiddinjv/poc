import React, { useState } from 'react';
import { supabase } from './api/supabaseClient';
import { Link } from 'react-router-dom';

// import { AssemblyAI } from 'assemblyai'

// const client = new AssemblyAI({
//   apiKey: "478c3155c2384010bdd7ebbfc6b10844"
// })

// const audioUrl = 'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'

// const run = async () => {
//   const transcript = await client.transcripts.transcribe({audio_url: audioUrl})
//   console.log(transcript.text)
// }

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmMessage, setConfirmMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    //Clear any prev msgs
    setConfirmMessage(''); 
    setConfirmMessage('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      console.log(error)
      if(error.status === 429){
        setErrorMessage('Please, sign up after 1 hour!');
      } else {
        setErrorMessage(error.message);
      }
    } else {
      setConfirmMessage('Check your email for the verification link!');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-500 text-purple-600 flex flex-col items-center p-4">
      <div className="bg-white p-8 rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
          >
            Sign Up
          </button>
        </form>
        {(confirmMessage || errorMessage) && <p className={`mt-4 text-center ${confirmMessage ? 'text-green-500':'text-red-500'}`}>{confirmMessage || errorMessage}</p>}
        <p className="mt-6 text-center text-gray-700">
          Already have an account?{' '}
          <Link to="/signin" className="text-purple-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
