import "./App.css";
import Post from "./Post";
import { Suspense } from "react";

const fetchPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  const postPromise = fetchPost();
  return (
    <>
      <h1>Get started</h1>
      <Suspense fallback={<h3>Posts are loading...</h3>}>
        <Post postPromise={postPromise}></Post>
      </Suspense>
    </>
  );
}

export default App;
