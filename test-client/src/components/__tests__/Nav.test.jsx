import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'

import Nav from '../Nav';

it('renders correctly', () => {
  const { container } = render(<Nav />, { wrapper: MemoryRouter });
  expect(container).toMatchSnapshot();
});
