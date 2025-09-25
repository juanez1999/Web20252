import type { ReactNode } from "react";
import type { Task } from "./TaskType";

export type ToDoProviderType = {
  children: ReactNode;
};

//La relación para saber cual es el tipado del contexto es con el número de elementos en el value del provider
export type ToDoContextType = {
  toDoTasks: Task[];
  setTodoTasks: (item: Task[]) => void;
};
