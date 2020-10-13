import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

interface User {
  id: number,
  name: string,
}

const IndexPage: React.FC = () => {
  const APOLLO_QUERY = gql`
    {
      users {
        id
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(APOLLO_QUERY);

  if (loading) return null;

  return (
    <div>
      HASURA TEST

      {data.users && data.users.length > 0 && data.users.map((item: User) => {
        return (
          <p key={item.id}>
            {item.id} - {item.name}
          </p>
        )
      })}
    </div>
  )
};

export default IndexPage;
