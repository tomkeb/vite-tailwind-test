const inputStyle = {
    class: "border-2 mt-2 p-1 rounded-xl"
};

export default function Input(props) {
    return (
        <>
            <p>{props.particle}: <input type={props.type} name={props.particle} className={inputStyle.class} onChange={props.onChange} value={props.value} /></p>
        </>
    );
}