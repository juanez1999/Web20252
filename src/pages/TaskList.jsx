//Paso 1: Importar el contexto
//Paso 2: Importar el useContext
//Paso 3: Utilizar el contexto con el useContext
//Paso 4: Destructurar el contexto
import { ToDoContext } from '../contexts/ToDoContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const navigate = useNavigate();
  const { taskList } = useContext(ToDoContext);

  return (
    <>
      {taskList.map((task, i) => (
        <h1 key={i}>{task}</h1>
      ))}
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default TaskList;
