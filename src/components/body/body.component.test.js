import { render, screen } from '@testing-library/react';
import Body from './body.component';

test('renders learn react link', () => {
  render(<Body />);
  const linkElement = screen.getByTestId("Body");
  expect(linkElement).toBeInTheDocument();
});
