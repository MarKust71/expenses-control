import React from 'react';
import { Typography } from '@material-ui/core';
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';
import { ErrorResponse, onError } from '@apollo/client/link/error';

import { Cats } from './cats/Cats';

const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`Graphql error: ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({
    uri: 'http://localhost:8080/graphql',
  }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Typography>Learn React</Typography>
      <Cats />
    </ApolloProvider>
  );
};
