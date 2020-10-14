import React from 'react';

import useCheckAuth from '../hooks/useCheckAuth';

import { signOut } from '../../utils/firebase/functions';

const IndexPage: React.FC = () => {
  useCheckAuth();

  return (
    <div>
      Main
      <button onClick={signOut}>logout</button>
    </div>
  )
};

export default IndexPage;
