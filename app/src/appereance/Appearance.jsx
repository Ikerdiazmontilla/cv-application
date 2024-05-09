import Color from "./Color"
import Font from "./Font"
import Layout from "./Layout"


export default function Appearance() {
  return(
    <div className="info">
      <Layout/>
      <Color/>
      <Font/>
    </div>
  )
}