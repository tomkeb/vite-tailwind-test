export default function Person(props) {
  return (
    <>
      <h1>name: {props.name ? props.name : "unknown"}</h1>
      <h2>age: {props.age}</h2>
      <p>eh {props.call}</p>
    </>
  );
}
