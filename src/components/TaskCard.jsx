export const TaskCard = ({ task, deleteTask }) => {

  return (
    <div>
      <h1>{task.title}</h1>
      <h2>{task.description}</h2>
      <button onClick={() => {deleteTask(task.id)}} >Eliminar</button>
    </div>
  );
};
