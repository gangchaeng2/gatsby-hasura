import React from 'react';

import useCheckAuth from '../hooks/useCheckAuth';

const IndexPage: React.FC = () => {
  useCheckAuth();

  return (
    <div>
      Main
    </div>
  )
};

export default IndexPage;
