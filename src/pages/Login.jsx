//Paso 1: Importar el context
//Paso 2: Importar el useContext sino esta importando
//Paso 3: Utilizar el useContext y destructurar el objeto del contexto

import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ToDoContext } from '../contexts/ToDoContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const { setTaskList } = useContext(ToDoContext);
  const [taskInput, setTaskInput] = useState('');
  const navigate = useNavigate();

  const handleTask = () => {
    setTaskList((prev) => [...prev, taskInput]);
  };

  return (
    <>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={handleTask}>Crear task</button>
      <h1>El tema es: {theme}</h1>
      <button onClick={() => navigate('/tasks')}>Ver tasks</button>
    </>
  );
};

export default Login;
