import { createContext, useState } from "react";
import type {
  ToDoProviderType,
  ToDoContextType,
} from "../types/ToDoContextType";
import type { Task } from "../types/TaskType";

// eslint-disable-next-line react-refresh/only-export-components
export const ToDoContext = createContext<ToDoContextType>({
  toDoTasks: [],
  setTodoTasks: () => {},
});

export const ToDoProvider = ({ children }: ToDoProviderType) => {
  const [toDoTasks, setTodoTasks] = useState<Task[]>([]);

  return (
    <ToDoContext.Provider value={{ toDoTasks, setTodoTasks }}>
      {children}
    </ToDoContext.Provider>
  );
};
