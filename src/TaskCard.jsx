export const TaskCard = ({ task }) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <h2>{task.description}</h2>
    </div>
  );
};
