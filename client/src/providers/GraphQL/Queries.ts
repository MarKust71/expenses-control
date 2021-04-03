import { gql } from '@apollo/client';

export const LOAD_CATS = gql`
  {
    cats {
      id
      name
      age
      breed
    }
  }
`;
