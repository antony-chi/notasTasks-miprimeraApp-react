import { tasks as data } from "./tasks"; //as data para cambair el nommbre
import { useEffect, useState } from "react";

//console.log(data);

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //inicializamos el task o data que se renombre
    setTasks(data);
  }, []);

  if (tasks.length === 0) {
    return <h1>No hay tareas aun..</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <h2>{task.description}</h2>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
