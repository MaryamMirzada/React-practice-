import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  function increaseHundle() {
    setcount(count + 10);
  }
  function decreaseHundle() {
    setcount(count - 4);
  }
  return (
    <div>
      <h4>Week 2, Practice</h4>
      <h5>Count : {count}</h5>
      <button onClick={increaseHundle}>Increase</button>
      <button onClick={decreaseHundle}>Decrease</button>
    </div>
  );
}

export default App;
