import { useState } from "react";

export default function Svg() {
  const [message, setMessage] = useState(0);
  let sampleCircleCopies = [];
  const min = 0;
  const max = 30;

  const handleChange = (event) => {
    if (event.target.valueAsNumber > 0) {
      setMessage(Math.max(min, Math.min(max, Number(event.target.valueAsNumber))));
    } else {
      setMessage('');
    }
  };

  if (message){
  sampleCircleCopies = [...new Array(message)].map((_, i) => (
    <use
      href="#originalCircle"
      x={
        200 +
        100 * Math.cos((270 * Math.PI) / 180 + (i * 2 * Math.PI) / message)
      }
      y={
        200 +
        100 * Math.sin((270 * Math.PI) / 180 + (i * 2 * Math.PI) / message)
      }
      key={i}
    />
  ));
  }

  return (
    <>
      <svg viewBox="0 0 400 400" style={{ maxWidth: 400, maxHeight: 400 }} className="p-0 border-2 mx-auto">
        <g transform="translate(-1000,-1000)">
          <circle
            cx="0"
            cy="0"
            r="10"
            id="originalCircle"
            className="circle"
          />
        </g>
        {sampleCircleCopies}
      </svg>
      <div>
        <input
          type="number"
          className="border-2 mt-2 p-1 rounded-xl"
          onChange={(e) => handleChange(e)}
          value={message}
        />
        <h2>Number: {sampleCircleCopies.length}</h2>
      </div>
    </>
  );
}
