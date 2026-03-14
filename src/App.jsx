import "./App.css";
import Todos from "./Todos";
import Post from "./Post";
import Albums from "./Albums";
import { Suspense } from "react";

const fetchPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
};

const fetchAlbums = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  return res.json();
};

function App() {
  const todosPromise = fetchTodos();
  const postPromise = fetchPost();
  const albumsPromise = fetchAlbums();
  return (
    <>
      <h1>Get started</h1>
      {/* <Suspense fallback={<h3>Posts are loading...</h3>}>
        <Post postPromise={postPromise}></Post>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Todos are loading..</h3>}>
        <Todos todosPromise={todosPromise}></Todos>
      </Suspense> */}

      <Suspense fallback={<h3>Albums are loading...</h3>}>
        <Albums albumsPromise={albumsPromise}></Albums>
      </Suspense>
    </>
  );
}

export default App;
