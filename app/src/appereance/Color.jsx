export default function Color({handleColorChange}) {

  return(
    <div className="place">
      <h2 className="title">Color</h2>
      <div className="pick-color">
        Accent color:
        <label className="color-picker"><input type="color" onChange={handleColorChange}/></label>
      </div>
    </div>
  )
}