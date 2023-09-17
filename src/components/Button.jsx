const buttonInfo = {
  class: "bg-slate-200 hover:bg-slate-300 rounded px-2 py-1 border-2 border-slate-300 hover:border-indigo-500 active:border-indigo-700 active:bg-slate-200"
};

export default function Button(props) {
  return (
    <>
      <button className={buttonInfo.class} onClick={props.onClick}>{props.buttonText}</button>
    </>
  );
}
