import React, { ReactElement, FunctionComponent } from 'react';
import { ApolloProvider } from '@apollo/client';

import { client } from './client';

interface EleProps {
  element: ReactElement,
}

export const wrapRootElement: FunctionComponent<EleProps> = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  )
};
