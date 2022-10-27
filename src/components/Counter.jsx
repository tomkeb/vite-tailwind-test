import Button from "./Button";
import { useState } from "react";

export default function Counter() {
  const progression = [1, 5, 25, 70];
  const modifiedProgression = progression.map(element => { return Math.round(Math.sqrt(element*5)); });

  const [counter, setCounter] = useState(1);

  function counterAdd() {
    setCounter((prevCount) => prevCount + 1);
  }

  function counterSubstract() {
    setCounter((prevCount) => prevCount - 1);
  }

  function counterReset() {
    setCounter(0);
  }

  function handleChange(event) {
    setCounter(event.target.value);
  }

  return (
    <>
      <p>
        ModifiedProgression:
        {modifiedProgression.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </p>
      <Button onClick={counterAdd} buttonText="add" />
      <Button onClick={counterSubstract} buttonText="substract" />
      <Button onClick={counterReset} buttonText="reset" />
      <input
        type="number"
        className="border-2 mt-2 p-1 rounded-xl"
        onChange={handleChange}
        value={counter}
      />
      <p>{counter}</p>
    </>
  );
}
