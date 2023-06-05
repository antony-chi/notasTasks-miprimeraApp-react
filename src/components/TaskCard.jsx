import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div>
      <h1>{task.title}</h1>
      <h2>{task.description}</h2>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};
