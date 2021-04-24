import React from 'react';
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';
import { ErrorResponse, onError } from '@apollo/client/link/error';
import { Route } from 'react-router-dom';

import { Root } from '../routing/root/Root';

import { useStyles } from './App.styles';
import { LoginPage } from './loginPage/LoginPage';
import { MainPage } from './mainPage/MainPage';

const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`Graphql error: ${message}`);

      return null;
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

export const App = (): JSX.Element => {
  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <Root>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Root>
    </ApolloProvider>
  );
};
