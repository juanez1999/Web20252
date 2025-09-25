import { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const TaskList = () => {
  const { toDoTasks } = useContext(ToDoContext);

  return (
    <>
      <h1>Lista de tareas</h1>
      {toDoTasks.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </>
  );
};

export default TaskList;
