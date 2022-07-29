import Button from "./Button";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        plus
      </button>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        minus
      </button>
      <h1>{counter}</h1>
    </>
  );
}
