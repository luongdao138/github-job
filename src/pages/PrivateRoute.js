import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  // const isUser = true;
  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Redirect to='/login' />;
      }}
    />
  );
};

export default PrivateRoute;
