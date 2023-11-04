import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const loggedin = localStorage.getItem('loggedin');

  return loggedin? <>{children}</> : <Navigate to='/'/>
};

export default PrivateRoute;
