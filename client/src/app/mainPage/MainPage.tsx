import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Cats } from '../cats/Cats';

import { MainPageProps } from './MainPage.types';
import { useStyles } from './MainPage.styles';

export const MainPage: React.FC<MainPageProps> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
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
    </>
  );
};
