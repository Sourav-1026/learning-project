import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    // console.log("button was clicked");
    const newCount = count + 1;
    setCount(newCount);
  };

  const conterStyle = {
    border: "2px solid yellow",
  };

  return (
    <div style={conterStyle} className="">
      <h3>Count: {count} </h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
