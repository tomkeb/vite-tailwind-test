import Button from "./Button";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function counterAdd() {
    setCounter((prevCount) => prevCount + 10);
  }

  function counterSubstract() {
    setCounter((prevCount) => prevCount - 10);
  }

  function counterReset() {
    setCounter(0);
  }

  return (
    <>
      <Button onClick={counterAdd} buttonText="add" />
      <Button onClick={counterSubstract} buttonText="substract" />
      <Button onClick={counterReset} buttonText="reset" />
      <h1 class="rounded-full text-center w-16 h-16 bg-slate-800 text-white mx-auto leading-[4rem]">
        {counter}
      </h1>
    </>
  );
}
