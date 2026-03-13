export default function Pst({ p }) {
  return (
    <div className="card">
      <h5>{p.title}</h5>
      <p>{p.body}</p>
    </div>
  );
}
