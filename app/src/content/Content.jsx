import PersonalDetails from "./PersonalDetails"
import Education from "./Education"
import Experience from "./Experience"

export default function Content({ handleChange }) {


  return(
    <div className="info">
    <PersonalDetails handleChange={handleChange}/>

    <Education/> 

    <Experience/>   
    
    </div>
  )
}