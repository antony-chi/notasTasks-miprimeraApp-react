import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

//console.log(data);
const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>No hay tareas aun..</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
