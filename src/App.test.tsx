import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test('renders home text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Art Library/i);
  expect(linkElement).toBeInTheDocument();
});
