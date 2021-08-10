import { render, screen } from '@testing-library/react';
import App from './App';

  test('renders App without crashing', () => {
    render(<App />);
    const appElement = screen.getByTestId("App");
    expect(appElement).toBeInTheDocument();
  });