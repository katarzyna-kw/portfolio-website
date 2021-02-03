import { render, screen } from '@testing-library/react';
import Footer from './footer.component';

test('renders learn react link', () => {
  render(<Footer />);
  const linkElement = screen.getByTestId("Footer");
  expect(linkElement).toBeInTheDocument();
});
