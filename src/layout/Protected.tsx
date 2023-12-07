import React from 'react';
import { Navigate } from 'react-router-dom';

import { useLocalStorage } from 'usehooks-ts';

type AuthProtectedProps = {
  children: React.ReactNode;
};

const Protected = (
  { children }: AuthProtectedProps = {
    children: null,
  }
) => {

  const [token] = useLocalStorage('token', null);
  const isAuthenticated = token !== null;
  
  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }


  return <React.Fragment>{children}</React.Fragment>;
};

export default Protected;
