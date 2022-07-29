import { useEffect } from 'react';
import Letter from './components/letter/Letter';
import useService from './hooks/useService';
import './App.css';

function App() {
  const { data, isLoading, get } = useService();

  useEffect(() => {
    get();
  }, []);

  if (isLoading) {
    return (
      <div data-testid="app-component" className="App">
        Loading...
      </div>
    )
  }

  return (
    <div data-testid="app-component" className="App">
      <Letter users={data} />
    </div>
  );
}

export default App;