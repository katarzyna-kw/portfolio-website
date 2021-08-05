import { render, screen } from '@testing-library/react';
import Footer from './footer.component';

test('renders Footer', () => {
  render(<Footer />);
  const footer = screen.getByTestId("Footer");
  expect(footer).toBeInTheDocument();
});