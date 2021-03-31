import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Loader from '../components/Loader';

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  return <>{children}</>;
};

export default AuthWrapper;
