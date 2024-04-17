// Tempapp.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tempapp from './Tempapp';

describe('Tempapp Component', () => {
  test('renders correctly', async () => {
    render(<Tempapp />);
    const searchInput = await screen.findByLabelText('Search city');
    expect(searchInput).toBeInTheDocument();
  });

  test('updates city and fetches weather data on search', async () => {
    render(<Tempapp />);
    const searchInput = await screen.findByLabelText('Search city');
    const searchButton = screen.getByRole('button', { name: /search/i });

    fireEvent.change(searchInput, { target: { value: 'London' } });
    fireEvent.click(searchButton);

    // Add assertions for updated city and weather data
  });

  test('displays error message for invalid city', async () => {
    render(<Tempapp />);
    const searchInput = await screen.findByLabelText('Search city');
    const searchButton = screen.getByRole('button', { name: /search/i });

    fireEvent.change(searchInput, { target: { value: 'InvalidCityName' } });
    fireEvent.click(searchButton);

    // Add assertions for error message
  });
});
