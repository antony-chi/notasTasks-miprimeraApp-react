import { createContext } from "react";

export const TaskContext = createContext(); //nombre del contexto
export const TaskContextProvider = (props) => {
  //nombre del componente que engloba a todo
  let x = 20
  return (
    //se crea el componente
    <TaskContext.Provider value={x}>{props.children}</TaskContext.Provider>
  );
};
