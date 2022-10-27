import Svg from "./components/Svg";
import Counter from "./components/Counter";

export default function App() {
  return (
    <>
      <Counter />
      <div className="mx-auto">
        <Svg />
      </div>
    </>
  );
}
