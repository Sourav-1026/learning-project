import { use } from "react";

export default function Album({ album }) {
  //   const albumData = use(album);
  const { userId, id, title } = album;
  return (
    <div className="card">
      <p>UserId: {userId}</p>
      <p>Id: {id}</p>
      <p>Title: {title.toUpperCase()}</p>
    </div>
  );
}
