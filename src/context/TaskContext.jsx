import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks"; //as data para cambair el nommbre


export const TaskContext = createContext(); //nombre del contexto
export const TaskContextProvider = (props) => {
  //nombre del componente que engloba a todo
  //datos a los que se puede acceder usuando useContext(TaskContext)
  const [tasks, setTasks] = useState([]);

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

  useEffect(() => {
    //inicializamos el task o data que se renombre
    setTasks(data);
  }, []);


  return (
    //se crea el componente
    <TaskContext.Provider value={{
      tasks: tasks,
      createTask: createTask,
      deleteTask: deleteTask
    }}>{props.children}</TaskContext.Provider>
  );
};
