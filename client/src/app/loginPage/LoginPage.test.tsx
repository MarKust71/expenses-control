import React from 'react';
import { render, screen } from '@testing-library/react';

import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  test('renders', () => {
    render(<LoginPage />);
    const element = screen.getByText('LoginPage');
    expect(element).toBeInTheDocument();
  });
});
