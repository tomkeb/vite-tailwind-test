const inputStyle = {
    class: "border-2 mt-2 p-1 rounded-xl"
};

export default function ParticleInput(props) {
    return (
        <>
            <p>{props.particle}: <input type="number" name={props.particle} className={inputStyle.class} onChange={props.onChange} value={props.value} /></p>
        </>
    );
}