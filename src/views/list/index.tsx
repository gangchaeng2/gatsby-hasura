import React, { FC } from 'react';
import { useQuery, createHttpLink } from '@apollo/client';
import gql from 'graphql-tag';

import { getToken } from '../../utils/firebase/functions';

interface User {
  id: number,
  name: string,
}

const ListView: FC = () => {
  const APOLLO_QUERY = gql`
    {
      itmes: users {
        id
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(APOLLO_QUERY, {
    
  });

  if (loading) return null;

  return (
    <div>
      HASURA TEST

      {/* {data.users && data.users.length > 0 && data.users.map((item: User) => {
        return (
          <p key={item.id}>
            {item.id} - {item.name}
          </p>
        )
      })} */}
    </div>
  );
}

export default ListView;
