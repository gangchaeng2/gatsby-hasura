import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import Cookies from 'js-cookie';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://bigshine-hasura.herokuapp.com/v1/graphql',
    // headers: {
    //   'Authorization': `Bearer ${token}`
    // },
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});