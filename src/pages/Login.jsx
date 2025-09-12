import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Login = () => {
  const setTheme = useContext(ThemeContext);

  return <button onClick={() => setTheme('dark')}>Cambiar tema</button>;
};

export default Login;
