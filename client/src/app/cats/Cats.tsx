import React, { useEffect } from 'react';
import { Typography, useTheme } from '@material-ui/core';
import { useQuery } from '@apollo/client';

import { LOAD_CATS } from 'providers/GraphQL/Queries';

import { CatsProps } from './Cats.types';
import { useStyles } from './Cats.styles';

export const Cats: React.FC<CatsProps> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { error, data, loading } = useQuery(LOAD_CATS);

  useEffect(() => {
    console.log(error, data, loading);
  }, [data]);

  return (
    <>
      <Typography>Cats</Typography>
      <div>{'www'}</div>
    </>
  );
};
