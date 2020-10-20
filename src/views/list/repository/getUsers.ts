import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useEffect, useState } from 'react';

import firebase from '../../../utils/firebase';

interface Users {
  items: Array<{ id: string }>;
}

const APOLLO_QUERY = gql`
  {
    items: users {
      id
      name
    }
  }
`;

const useGetUsers = (query: string) => {
  const [idToken, setIdToken] = useState<string | undefined>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [getPendingList, { data: users }] = useLazyQuery<Users>(APOLLO_QUERY, {
    fetchPolicy: "no-cache",
    context: {
      headers: {
        'Authorization': `Bearer ${idToken}`
      },
    },
    onCompleted: () => {
      setLoading(false);
    },
    onError: err => {
      console.log(err);
      setLoading(false);
    }
  });

  useEffect(() => {
    async function setToken() {
      const idToken = await firebase.auth().currentUser?.getIdToken();
      setIdToken(idToken);
    }

    setToken();
  }, []);

  useEffect(() => {
    async function getList() {
      try {
        await getPendingList();
      } catch(err) {
        console.log(err);
      }
    }

    if (idToken) {
      getList();
    }
  }, [idToken]);

  return { isLoading, users };
}

export default useGetUsers;
