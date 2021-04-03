import React from 'react';
import { render, screen } from '@testing-library/react';

import { Cats } from './Cats';

describe('Cats', () => {
  test('renders', () => {
    render(<Cats />);
    const element = screen.getByText('Cats');
    expect(element).toBeInTheDocument();
  });
});
