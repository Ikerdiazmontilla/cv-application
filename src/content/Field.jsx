import { useState, useEffect } from "react";


export default function Field({ label, id, initValue = "", handleChange = () => {}, isRequired = false}) {
  const [ value, setValue ] = useState(initValue);

  useEffect(() => {
    if(initValue !== value) {
      setValue(initValue);
    }
  }, [initValue])

  function onWrite(event) {
    setValue(event.target.value);
    handleChange(event);
  }

  return (
    <div className="field">
      <label htmlFor={id}>{label}{isRequired === true && <span>Required</span>}</label>
      { id === 'description' ? <textarea id={id} onChange={onWrite} value={value}></textarea> :<input value={value} type="text" id={id} onChange={onWrite}/>}
    </div> 
  )
}