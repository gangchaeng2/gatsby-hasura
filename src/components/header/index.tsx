import React from 'react';
import Cookies from 'js-cookie';

import useCheckAuth from '../../hooks/useCheckAuth';
import { signOut } from '../../utils/firebase/functions';

const HeaderComponent: React.FC = () => {
  useCheckAuth();
  const isLogin = Cookies.get('token') ?? false;

  return (
    <div>
      Header
      {isLogin ? <button onClick={signOut}>logout</button> : <button onClick={() => window.location.href = '/login'}>login</button>}
    </div>
  )
};

export default HeaderComponent;
