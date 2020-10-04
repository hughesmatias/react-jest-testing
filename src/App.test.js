import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('validacion de titulo', () => {
  const { getByText } = render(<App />);
  getByText('TODOS');
});

test('validacion usuario agregando en la lista', () => {
  const { getByLabelText, getByText } = render(<App />);
  const primerElemento = 'Prueba 123';

  const input = getByLabelText('Que necesitas?');
  fireEvent.change(input, {
    target: {
      value: primerElemento,
    },
  });

  fireEvent.click(getByText('Agregar #1'));

  getByText(primerElemento);
});
