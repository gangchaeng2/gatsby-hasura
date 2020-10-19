import { useQuery, createHttpLink, ApolloClient } from '@apollo/client';
import gql from 'graphql-tag';

import firebase from '../../../utils/firebase';

export const getUsers = async (query) => {
	const idToken = await firebase.auth().currentUser?.getIdToken();
	const APOLLO_QUERY = gql`
    {
      itmes: users {
        id
        name
      }
    }
  `;

  const { loading, error, data, refetch } = useQuery(APOLLO_QUERY, {
    context: {
			headers: {
			  'Authorization': `Bearer ${idToken}`
			},
		}
	});
	
	return { loading, data };
}