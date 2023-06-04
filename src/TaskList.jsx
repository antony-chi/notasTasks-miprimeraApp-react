//console.log(data);
const TaskList = ({ tasks }) => {
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
