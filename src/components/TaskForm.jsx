import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [title, setTitle] = useState(""); //guradmaos el tipeo dl user en un stado
  const [description, setDescription] = useState(""); //guradmaos el tipeo dl user en un stado

  //usamos el contexto importado
  const {createTask} = useContext(TaskContext) //usamos contexto(nombreDelContx y guradar en una const {destructurando el valor})

  const handleSubmit = (event) => {
    //funcion que ejecuta el form
    event.preventDefault(); //preventDefault para evitar que recargue el navegador
    createTask({
      title: title,
      description: description,
    });
    setTitle(""); //para restablecer el hooks useState en vacio
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Escribe una descripcion de tarea"
        value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
};

export default TaskForm;
