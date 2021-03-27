import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>useState</h1>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>Incremet</button>
    </div>
  );
}
