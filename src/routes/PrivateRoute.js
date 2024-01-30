import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth } from "../firebase"

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!auth.currentUser;

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
