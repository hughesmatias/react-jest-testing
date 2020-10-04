import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('validacion de titulo', () => {
  const { getByText } = render(<App />);
  getByText("TODOS");
});
