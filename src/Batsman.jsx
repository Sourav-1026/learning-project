import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedRun = runs + 1;
    setRuns(updatedRun);
  };
  const handleFour = () => {
    const updatedRun = runs + 4;
    setRuns(updatedRun);
  };
  const handleSix = () => {
    const updatedRun = runs + 6;
    const updateSixes = sixes + 1;
    setSixes(updateSixes);
    setRuns(updatedRun);
  };

  return (
    <div>
      <h3>Player: Bangla Batsman</h3>
      {runs > 50 && <p>Your Score: 50</p>}
      <h1>Score: {runs}</h1>
      <h1>Sixes: {sixes}</h1>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
