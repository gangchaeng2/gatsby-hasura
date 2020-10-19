import React from 'react';
import { Router } from '@reach/router';

import useCheckAuth from '../hooks/useCheckAuth';
import BasicRoute from '../utils/route/basicRoute';
import PrivateRoute from '../utils/route/privateRoute';

// 비로그인
import Login from '../views/login';
import SignUp from '../views/signUp';

// 로그인
import List from '../views/list';
import Dashboard from '../views/dashboard';

const IndexPage: React.FC = () => {
  const { authState: { loading, token } } = useCheckAuth();

  if (status === 'loading') {
    <div>loading....</div>
  }

  if (!token) {
    return (
      <Router basepath="/app">
        <BasicRoute path="/login" component={Login} />
        <BasicRoute path="/signUp" component={SignUp} />
      </Router>
    );
  }

  return (
    <Router basepath="/app">
      <PrivateRoute path="/list" component={List} />
      <PrivateRoute path="/" component={Dashboard} />
    </Router>
  )
};

export default IndexPage;
