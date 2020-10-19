import React from 'react';

import { signOut } from '../../utils/firebase/functions';

type Props = {
  isLoggedIn: boolean,
}

const HeaderComponent: React.FC<Props> = ({ isLoggedIn }) => {
  return (
    <div>
      Header Component
      {isLoggedIn ? <button onClick={signOut}>logout</button> : <button onClick={() => window.location.href = '/login'}>login</button>}
    </div>
  )
};

export default HeaderComponent;
