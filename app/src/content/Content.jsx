import PersonalDetails from "./PersonalDetails"
import Education from "./Education"
// import Experience from "./Experience"

export default function Content({ handleDetailsChange, handleEducationSave, handleEducationDelete, handleEducationID, educationValues, educationCurrentID }) {

  return(
    <div className="info">
    <PersonalDetails handleChange={handleDetailsChange}/>

    <Education handleSave={handleEducationSave} handleDelete={handleEducationDelete} handleID={handleEducationID} educationValues={educationValues} currentID={educationCurrentID}/> 

    {/* <Experience/>    */}
    
    </div>
  )
}