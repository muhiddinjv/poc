import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../api/supabaseClient';

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: sessionData, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Error fetching session:', error);
      } else {
        setSession(sessionData.session);
      }
      setLoading(false);
    };

    fetchSession();
  }, []);

  if (loading) return <div>Loading...</div>;

  return session ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
