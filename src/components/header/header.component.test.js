import { render, screen } from '@testing-library/react';
import Header from './header.component';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByTestId("Header");
  expect(linkElement).toBeInTheDocument();
});
