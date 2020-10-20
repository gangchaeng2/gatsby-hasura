import React from 'react';
import { Router } from '@reach/router';

import useCheckAuth from '../hooks/useCheckAuth';

import BasicRoute from '../utils/route/basicRoute';
import PrivateRoute from '../utils/route/privateRoute';

import Layout from '../components/layout';

// 비로그인
import Login from '../views/login';
import SignUp from '../views/signUp';

// 로그인
import List from '../views/list';
import Dashboard from '../views/dashboard';

import NotFound from '../pages/404';

const IndexPage: React.FC = () => {
  const { authState: { isLoading, isLoggedIn } } = useCheckAuth();

  if (isLoading) {
    return (
      <div>loading....</div>  
    );

  } else {
    if (!isLoggedIn) {
      return (
        <Layout>
          <Router basepath="/app">
            <BasicRoute default component={NotFound} />
            <BasicRoute path="/login" component={Login} />
            <BasicRoute path="/signUp" component={SignUp} />
          </Router>
        </Layout>
      );
    }
  
    return (
      <Layout>
        <Router basepath="/app">
          <PrivateRoute default component={NotFound} />
          <PrivateRoute path="/list" component={List} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Router>
      </Layout>
    );
  }

  return null;
};

export default IndexPage;
