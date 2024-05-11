import PersonalDetails from "./PersonalDetails"
import Education from "./Education"
import Experience from "./Experience"

export default function Content({ handleDetailsChange, educationObject, experienceObject }) {

  return(
    <div className="info">
    <PersonalDetails handleChange={handleDetailsChange}/>

    <Education handleSave={educationObject.handleSave} handleDelete={educationObject.handleDelete} handleID={educationObject.handleID} educationValues={educationObject.educationValues} currentID={educationObject.currentID}/> 

    <Experience handleSave={experienceObject.handleSave} handleDelete={experienceObject.handleDelete} handleID={experienceObject.handleID} experienceValues={experienceObject.experienceValues} currentID={experienceObject.currentID}/>   
    
    </div>
  )
}