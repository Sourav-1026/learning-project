export default function Todo({ todo }) {
  return (
    <div className="card">
      <p>Id: {todo.id}</p>
      <p>Title: {todo.title.toUpperCase()}</p>
      <p>Status: {todo.completed.toString().toUpperCase()}</p>
    </div>
  );
}
