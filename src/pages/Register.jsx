import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/tasks')}>Ver tasks</button>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </>
  );
};

export default Register;
