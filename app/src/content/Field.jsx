export default function Field({ label, handleChange, id }) {


  return (
    <div className="field"><label htmlFor={id}>{label}</label><input type="text" id={id} onChange={handleChange}/></div> 
  )
}