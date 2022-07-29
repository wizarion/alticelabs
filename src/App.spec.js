import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('Testing App', () => {

  afterEach(() => {
    cleanup();
  });
  
  it('should render app component', () => {
    const { getByTestId } = render(<App />);
    
    const appComponent = getByTestId('app-component');
    
    expect(appComponent).toBeInTheDocument();
    expect(appComponent).toHaveAttribute('class', 'App');
  });
})