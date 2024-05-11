import { useState } from "react"
import Field from "./Field"
import educationPic from "../assets/education.png"
import FormBtns from "./FormBtns"
import MoreBtn from "./MoreBtn"
import Section from "./Section";



export default function Education({handleSave, handleDelete, educationValues, handleID, currentID}) {
  const [ expanded, setExpanded ] = useState(false);
  const [ showForm, setShowForm ] = useState(false);

 
  const handleExpand = () => setExpanded(!expanded)

  const handleShowForm = (event) => {
    handleID(event);
    setShowForm(!showForm);
  }
  
  const onSave = () => {
    setShowForm(!showForm);
    handleSave()
  }

  const onDelete = () => {
    setShowForm(!showForm)
    handleDelete()
  }

  const EducationFields = () => (
    <>
      <Field id="school"  label="School" 
      initValue={educationValues[currentID] ? educationValues[currentID]['school'] : ""}
      isRequired={true}/>
      <Field id="degree" label="Degree" 
      initValue={educationValues[currentID] ? educationValues[currentID]['degree'] : ""}
      isRequired={true}/>
      <Field id="start-date"  label="Start Date" 
      initValue={educationValues[currentID] ? educationValues[currentID]['startDate'] : ""}/>
      <Field id="end-date"  label="End Date" 
      initValue={educationValues[currentID] ? educationValues[currentID]['endDate'] : ""}/>
      <Field id="location"  label="Location" 
      initValue={educationValues[currentID] ? educationValues[currentID]['location'] : ""}/>
      <FormBtns handleDelete={onDelete} handleSave={onSave} handleShowForm={handleShowForm}/>
    </>
  );


  return (
    <form className="education place">
      <h2 className="title">  <img className="logo" src={educationPic} alt="" /> Education <button type="button" className={expanded ? "arrow clicked" : "arrow"} onClick={handleExpand}>⌄</button></h2>
    
      <div className={expanded ? "fields-container expanded" : "fields-container"}>
        {showForm ? <EducationFields/> :
              <>
                {Object.values(educationValues).map((values) => {
                  return <Section key={values.id} values={values} handleShowForm={handleShowForm} isEducation={true}/>
                })}
                <MoreBtn handleShowForm={handleShowForm} text={'+ Education'}/>
              </>
        }
      </div>
  
    </form>
  )
}

{/* <EducationSection handleShowForm={handleShowForm} key="London City University" id ="math" values={{school: "London City University"}}/> */}

            {/* <EducationSection handleShowForm={handleShowForm} title="London City University"/>
            <EducationSection values={{school: "Hidden University"}}/> */}

              // const [ formValues, setFormValues ] = useState({
  //   school: "",
  //   degree: "",
  //   "start-date": "",
  //   "end-date": "",
  //   location: "",
  // })
  // math: {
  //   school: "London City University",
  //   degree: "math",
  //   startDate: "a",
  //   endDate: "b",
  //   location: "c",

  // }
