import { useState, useEffect } from "react";


export default function Field({ label, id, initValue, handleChange = ""}) {
  const [ value, setValue ] = useState(initValue);

  useEffect(() => {
    if(initValue !== value) {
      setValue(initValue);
    }
  }, [initValue])

  function onWrite(event) {
    setValue(event.target.value);
    // handleChange();
  }

  return (
    <div className="field"><label htmlFor={id}>{label}</label><input value={value} type="text" id={id} onChange={onWrite}/></div> 
  )
}