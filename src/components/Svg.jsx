import { useState } from "react";
import Input from "./Input"

export default function Svg() {
  const [formValue, setFormValue] = useState({
    protons: "",
    charge: ""
  });

  const { protons, charge } = formValue;

  let electronCopies, protonCopies = [];

  const handleChange = (event, min, max) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      if (parseInt(value)) {
        return {
          ...prevState,
          [name]: Math.max(min, Math.min(max, Number(value))),
        };
      } else {
        return {
          ...prevState,
          [name]: value,
        };
      }
    });
  };

  if (protons > 0) {
    protonCopies = [...new Array(protons)].map((_, i) => (
      <use
        href="#proton"
        x={200 + 30 * Math.cos((270 * Math.PI) / 180 + (i * 2 * Math.PI) / protons)}
        y={200 + 30 * Math.sin((270 * Math.PI) / 180 + (i * 2 * Math.PI) / protons)}
        key={i}
      />
    ));
    if (protons - charge > 0) {
      electronCopies = [...new Array(protons - charge)].map((_, i) => (
        <use
          href="#electron"
          x={200 + 100 * Math.cos((270 * Math.PI) / 180 + (i * 2 * Math.PI) / (protons - charge))}
          y={200 + 100 * Math.sin((270 * Math.PI) / 180 + (i * 2 * Math.PI) / (protons - charge))}
          key={i}
        />
      ));
    }
  }

  return (
    <>
      <svg viewBox="0 0 400 400" style={{ maxWidth: 400, maxHeight: 400 }} className="p-0 border-2 mx-auto">
        <g transform="translate(-1000,-1000)">
          <circle cx="0" cy="0" r="10" id="electron" className="electron" />
          <circle cx="0" cy="0" r="10" id="proton" className="proton" />
        </g>
        {electronCopies}
        {protonCopies}
      </svg>
      <div>
        <Input particle="protons" type="number" onChange={(e) => handleChange(e, 0, 12)} value={protons} />
        <Input particle="charge" type="number" onChange={(e) => handleChange(e, -protons, protons)} value={charge} />
      </div>
    </>
  );
}
