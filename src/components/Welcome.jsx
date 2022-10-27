import Veverka from "../images/veverka.svg";

export default function Welcome() {
  return (
    <>
      <h1 className="text-2xl bg-indigo-700 text-white p-2 rounded">SVG</h1>
      <p>Níže je svg.</p>
      <img src={Veverka} className="w-32 mx-auto" />
    </>
  );
}
