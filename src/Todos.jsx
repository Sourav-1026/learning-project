import { use } from "react";
import Todo from "./Todo";

export default function Todos({ todosPromise }) {
  const todos = use(todosPromise);
  console.log(todos);
  return (
    <div className="card">
      <h3>All Todos Will be shown here: {todos.length}</h3>
      {todos.map((todo) => (
        <Todo todo={todo}></Todo>
      ))}
    </div>
  );
}
