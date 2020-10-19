import React from 'react';

import firebase from '../../utils/firebase';
import Header from '../header';

const LayoutComponent: React.FC = ({ children }) => {
  const user = firebase.auth().currentUser;

  return (
    <div>
      <Header isLoggedIn={!!user?.uid ?? false } />
      {children}
    </div>
  )
};

export default LayoutComponent;
