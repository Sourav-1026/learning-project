import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";

function App() {
  function handClick() {
    alert("I am clicked");
  }

  const handClick2 = () => {
    alert("I am clicked 2");
  };

  return (
    <>
      <h1>Get started</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handClick}>Click Me</button>
      <button onClick={handClick2}>Click Me2</button>
    </>
  );
}

export default App;
