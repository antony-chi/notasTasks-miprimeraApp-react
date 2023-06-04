import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { tasks as data } from "./tasks"; //as data para cambair el nommbre
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //inicializamos el task o data que se renombre
    setTasks(data);
  }, []);

  //funcion crearnuevaTask
  function createTask(taskTitke) {
    setTasks([...tasks, {
      title: taskTitke,
      id: tasks.length,
      description: "nueva description"
    }]);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
