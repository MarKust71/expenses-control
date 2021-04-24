import React from 'react';
import { useTheme } from '@material-ui/core';
import { Switch } from 'react-router-dom';

import { RootProps } from './Root.types';
import { useStyles } from './Root.styles';

export const Root: React.FC<RootProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <Switch>{children}</Switch>;
};
