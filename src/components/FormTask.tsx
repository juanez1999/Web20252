import { useState } from "react";
import { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";
import type { Task } from "../types/TaskType";

const FormTask = () => {
  const [task, setTask] = useState<string>("");
  const { toDoTasks, setTodoTasks } = useContext(ToDoContext);

  const handleCreateTask = () => {
    const newTask: Task = { id: 123, text: task };
    setTodoTasks([...toDoTasks, newTask]);
  };

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => handleCreateTask()}>Crear task</button>
    </>
  );
};

export default FormTask;
