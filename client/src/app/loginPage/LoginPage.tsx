import React from 'react';
import { useTheme } from '@material-ui/core';

import { LoginPageProps } from './LoginPage.types';
import { useStyles } from './LoginPage.styles';

export const LoginPage: React.FC<LoginPageProps> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <>LoginPage</>;
};
