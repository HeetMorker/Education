import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token'); // Check if user is authenticated
  const role = localStorage.getItem('role'); // Get the user role from localStorage

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If role is not authorized, redirect to unauthorized page
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  // If authorized, render the child components
  return children;
};

export default ProtectedRoute;
