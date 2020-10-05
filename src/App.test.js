import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  fireEvent.click(getByText('Agregar #2'));
});

// otra funcion propia de testing library
test('tipeo en el form para agregar en la lista', () => {
  const { getByLabelText, getByText } = render(<App />);
  const inputValue = 'Prueba 2';
  userEvent.type(getByLabelText('Que necesitas?'), inputValue);
  expect(screen.getByDisplayValue(inputValue)).toHaveValue(inputValue);
});
