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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-600 p-10 mb-10">
        <h1 className="text-2xl font-bold pb-3 text-white">Crear Tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="p-3 w-full mb-3 rounded-md"
        autoFocus
        />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Escribe una descripcion de tarea"
        value={description}
        className="p-4 w-full mb-3 rounded-md"
      ></textarea>
      <button className="bg-sky-600 text-white px-3 py-2 rounded-xl hover:bg-sky-200 hover:">Guardar</button>
    </form>
    </div>
  );
};

export default TaskForm;
