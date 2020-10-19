import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useEffect, useState } from 'react';

import firebase from '../../../utils/firebase';

const APOLLO_QUERY = gql`
  {
    itmes: users {
      id
      name
    }
  }
`;

const useGetUsers = (query: string) => {
  const [idToken, setIdToken] = useState<string | undefined>();
  const [getPendingList, { loading, data }] = useLazyQuery(APOLLO_QUERY, {
    fetchPolicy: "no-cache",
    context: {
      headers: {
        'Authorization': `Bearer ${idToken}`
      },
    }
  }, [idToken]);

  useEffect(() => {
    async function getIdToken() {
      const idToken = await firebase.auth().currentUser?.getIdToken();
      setIdToken(idToken);
    }

    getIdToken();
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

  return { loading, data };
}

export default useGetUsers;
