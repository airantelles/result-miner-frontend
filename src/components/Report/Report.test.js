import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Report from './Report';

describe('<Report />', () => {
  test('it should mount', () => {
    render(<Report />);
    
    const report = screen.getByTestId('Report');

    expect(report).toBeInTheDocument();
  });
});