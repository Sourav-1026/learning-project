import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import "./App.css";
import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const friendPromise = fetchFriends();

  function handClick() {
    alert("I am clicked");
  }

  const handClick2 = () => {
    alert("I am clicked 2");
  };

  return (
    <>
      <h1>Get started</h1>
      {/* <Suspense fallback={<h3>Loading.....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendPromise={friendPromise}></Friends>
      </Suspense>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handClick}>Click Me</button>
      <button onClick={handClick2}>Click Me2</button>
    </>
  );
}

export default App;
