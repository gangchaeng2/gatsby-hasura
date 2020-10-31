import React, { FC } from 'react';

import getUsers from './repository/getUsers';

interface User {
  id: number,
  name: string,
}

const ListView: FC = () => {
  const { isLoading, users } = getUsers('asdf');

  if (isLoading) {
    return <div>로딩</div>
  }

  return (
    <div>
      HASURA TEST

      {/* {users && users.length > 0 && users.map((item: User) => {
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
