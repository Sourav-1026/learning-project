import { use } from "react";
import Pst from "./Pst";

export default function Post({ postPromise }) {
  const posts = use(postPromise);
  console.log(posts);
  return (
    <div className="card">
      <p>All Post Is Here: {posts.length}</p>
      {posts.map((p) => (
        <Pst p={p}></Pst>
      ))}
    </div>
  );
}
