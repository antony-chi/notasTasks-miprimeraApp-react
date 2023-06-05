import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data } from "./data/tasks"; //as data para cambair el nommbre
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //inicializamos el task o data que se renombre
    setTasks(data);
  }, []);

  //funcion crearnuevaTask
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }
  //funcion eliminar task
  function deleteTask(taskId) {
    //console.log(tasks)
    //console.log(taskId)
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
