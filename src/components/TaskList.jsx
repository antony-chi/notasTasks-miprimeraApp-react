import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

//console.log(data);
const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun..</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-8">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
