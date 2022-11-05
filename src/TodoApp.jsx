import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store";

export const TodoApp = () => {
  const [TodoId, setTodoId] = useState(1);
  //   const {data: todos , error, isLoading} = useGetTodosQuery()
  const { data: todo, error, isLoading } = useGetTodoByIdQuery(TodoId);

  const prevTodo = () => {
    if (TodoId === 1) return;

    setTodoId(TodoId - 1);
  };
  const nextTodo = () => {
    setTodoId(TodoId + 1);
  };

  return (
    <>
      <h1>Todos - RTK Querys</h1>
      <hr />
      <h4>isLoading: {isLoading ? "True" : "False"}</h4>
      Actual Todo: {TodoId}
      <pre> {JSON.stringify(todo)} </pre>
      {/* <ul>
        {
            todos?.map(({id, title, completed}) => (
                <li key={id}>
                    <p>{title} - <strong>{(completed) ? 'Completado': 'Sin realizar'} </strong> </p> 
                </li>
            ))
        }
      </ul> */}
      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
