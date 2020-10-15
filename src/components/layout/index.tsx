import React from 'react';

import Header from '../header';

const LayoutComponent: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
};

export default LayoutComponent;
