import { useGetTodosQuery } from "./store";

export const TodoApp = () => {
  const {data: todos , error, isLoading} = useGetTodosQuery() 
     
  return (
    <>
      <h1>Todos - RTK Querys</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

      <pre> ... </pre>
      <ul>
        {
            todos?.map(({id, title, completed}) => (
                <li key={id}>
                    <p>{title} - {(completed) ? 'Completado': 'Sin realizar'}</p> 
                </li>
            ))
        }
      </ul>

      <button>Next Todo</button>
    </>
  );
};
