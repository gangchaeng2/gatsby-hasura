import React from 'react';
import { Layout } from 'antd';

import { signOut } from '../../utils/firebase/functions';

type Props = {
  isLoggedIn: boolean,
}

const { Header } = Layout;

const HeaderComponent: React.FC<Props> = ({ isLoggedIn }) => {
  return (
    <Header>
      Header Component
      {isLoggedIn ? <button onClick={signOut}>logout</button> : <button onClick={() => window.location.href = '/app/login'}>login</button>}
    </Header>
  )
};

export default HeaderComponent;
