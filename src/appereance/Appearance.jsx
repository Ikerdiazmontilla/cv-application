import Color from "./Color"
import Font from "./Font"
import Layout from "./Layout"


export default function Appearance({handleVisuals, handleColorChange, handleChangeFont}) {
  return(
    <div className="info">
      <Layout handleVisuals={handleVisuals}/>
      <Color handleColorChange={handleColorChange}/>
      <Font handleChangeFont={handleChangeFont}/>
    </div>
  )
}