import { render, screen } from '@testing-library/react';
import Body from './body.component';

test('renders Body', () => {
  render(<Body />);
  const body = screen.getByTestId("Body");
  expect(body).toBeInTheDocument();
});