import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-600 text-white p-5 rounded-lg">
      <h1 className="text-2xl font-bold capitalize">{task.title}</h1>
      <h2 className="text-gray-400">{task.description}</h2>
      <button
        className="bg-red-600 px-3 py-2 rounded-md mt-4 hover:bg-red-400"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};
