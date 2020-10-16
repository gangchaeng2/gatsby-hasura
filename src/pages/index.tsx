import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import Login from './login';

const LoginView = (props: RouteComponentProps) => <Login />

const IndexPage: React.FC = () => {
  return (
    <div>
      Main Page

      <Router>
        <LoginView path="/login" />
      </Router>
    </div>
  )
};

export default IndexPage;
