import Veverka from "../images/veverka.svg";

export default function Welcome() {
  return (
    <>
      <h1 className="text-3xl bg-indigo-700 text-white p-5 rounded">
        Welcome To My App, you *** ***
      </h1>
      <p>This is going to be the coolest app in the world!</p>
      <p>Hello there, you *** ***.</p>
      <img src={Veverka} className="w-32 mx-auto" />
    </>
  );
}
