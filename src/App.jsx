import './App.css';
import Login from './pages/Login';
import { ThemeContext } from './contexts/ThemeContext';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  console.log(counter);

  return (
    <ThemeContext value={setCounter}>
      <Login />
    </ThemeContext>
  );
}

export default App;
