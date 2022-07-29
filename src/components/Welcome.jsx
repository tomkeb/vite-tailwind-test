import Veverka from "../images/veverka.svg"

export default function Welcome() {
  return (
    <>
        <h1 className="text-3xl bg-indigo-700">Welcome To My App</h1>
        <p>This is going to be the coolest app in the world!</p>
        <p>Hello there, you fucking fuck.</p>
        <img src={Veverka} className="w-32" />
    </>
  );
}