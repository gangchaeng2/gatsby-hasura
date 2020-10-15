import React, { ReactElement } from 'react';
import { ApolloProvider } from '@apollo/client';

import Layout from '../components/layout'
import { client } from './client';

interface EleProps {
  element: ReactElement,
}

export const wrapRootElement: React.FC<EleProps> = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        {element}
      </Layout>
    </ApolloProvider>
  )
};
