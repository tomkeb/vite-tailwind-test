import Welcome from "./components/Welcome";
import Button from "./components/Button";
import Person from "./components/Person";
import Counter from "./components/Counter";


export default function App() {
  return (
    <>
      <Welcome />
      <Button buttonText="heelo there" />
      <Person name={"John"} age="31" call="eh" />
      <Person name={"Lucie"} age="16" call="mněh" />
      <Person age="15" call="ehm" />
      <Counter />
    </>
  );
}
