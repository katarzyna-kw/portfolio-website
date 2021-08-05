import { render, screen } from '@testing-library/react';
import Header from './header.component';

test('renders header', () => {
  render(<Header />);
  const header = screen.getByTestId("Header");
  expect(header).toBeInTheDocument();
});