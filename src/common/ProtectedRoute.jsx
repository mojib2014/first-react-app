import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();

  return !isLoggedIn ? (
    <Navigate to="/login" state={location} replace />
  ) : (
    children
  );
}
