const buttonInfo = {
  class: "bg-slate-200 hover:bg-slate-300 rounded-xl p-3"
};


export default function Button(props) {
  return (
    <>
      <button className={buttonInfo.class}>{props.buttonText}</button>
    </>
  );
}
