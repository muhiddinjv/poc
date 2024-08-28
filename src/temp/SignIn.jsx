import React, { useState } from 'react';
import { supabase } from './api/supabaseClient';
import { useNavigate, Link } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous messages

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage('Login failed: ' + error.message);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-500 text-purple-600 flex flex-col items-center p-4">
      <div className="bg-white p-8 rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <form onSubmit={handleSignIn}>
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
            Sign In
          </button>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        <p className="mt-6 text-center text-gray-700">
          Don’t have an account?{' '}
          <Link to="/signup" className="hover:underline text-purple-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
