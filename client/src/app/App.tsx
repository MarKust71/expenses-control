import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';
import { ErrorResponse, onError } from '@apollo/client/link/error';
import MenuIcon from '@material-ui/icons/Menu';

import { Cats } from './cats/Cats';
import { useStyles } from './App.styles';

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
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Typography>Learn React</Typography>
      <Cats />
    </ApolloProvider>
  );
};
