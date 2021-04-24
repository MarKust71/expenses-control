import React from 'react';
import { render, screen } from '@testing-library/react';

import { MainPage } from './MainPage';

describe('MainPage', () => {
  test('renders', () => {
    render(<MainPage />);
    const element = screen.getByText('MainPage');
    expect(element).toBeInTheDocument();
  });
});
