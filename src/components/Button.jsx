const buttonInfo = {
  class: "bg-slate-200 hover:bg-slate-300 rounded-xl p-2 m-1 border-2 border-slate-300 hover:border-indigo-500"
};


export default function Button(props) {
  return (
    <>
      <button className={buttonInfo.class} onClick={props.onClick}>{props.buttonText}</button>
    </>
  );
}
