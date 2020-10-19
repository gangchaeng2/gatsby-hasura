import React, { FC } from 'react';

import { getUsers } from './repository';

interface User {
  id: number,
  name: string,
}

const ListView: FC = () => {
  const { loading, data } = await getUsers('asdf');
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
