import { useState } from "react"
import Field from "./Field"
import educationPic from "../assets/education.png"
import showPic from "../assets/view.png"
import hidePic from "../assets/hide.png"
import { v4 as uuidv4 } from 'uuid';
import FormBtns from "./FormBtns"

function EducationSection({ values, handleShowForm }) {
  const [ show, setShow ] = useState(true);

  const handleShow = () => {
    setShow(!show)};

  return(
    <div type="button" className="education-section" id={values.id}  onClick={handleShowForm}>
        <p>{values.school}</p>
        <button type="button" className="show" onClick={ (e) => {
          e.stopPropagation();
          handleShow();
        }}>
          <img src={ show &&  showPic || hidePic} alt="show title" />
        </button>
    </div>
  )
}

const EducationBtn = ({ handleShowForm }) => {

  return(
    <button type="button" className="more-education" onClick={handleShowForm}>
          + Education
    </button>
  )
}


export default function Education({ handleChange }) {
  const [ expanded, setExpanded ] = useState(false);
  const [ showForm, setShowForm ] = useState(false)
  const [ currentId, setCurrentId ] = useState(null)
  const [ educationValues, setEducationValues ] = useState({})
 

  const handleExpand = () => setExpanded(!expanded)

  const handleShowForm = (event) => {
    setCurrentId(null);
    if(event.currentTarget.id) {
      setCurrentId(event.currentTarget.id) 
    }
    setShowForm(!showForm)
  }
  
  const handleSave = () => {
    const school = document.querySelector('#school').value
    const degree = document.querySelector('#degree').value
    const startDate = document.querySelector('#start-date').value
    const endDate = document.querySelector('#end-date').value
    const location = document.querySelector('#location').value
    const id = uuidv4();
    
    const newValues = {...educationValues}
    delete newValues[currentId];
    const newObject = {
      ...newValues,
      [id]: {
      school,
      degree,
      startDate,
      endDate,
      location,
      id,
      },
    }
    setEducationValues(newObject);
    setShowForm(!showForm);
  }

  const handleDelete = () => {
    const newValues = {...educationValues};
    delete newValues[currentId];
    setEducationValues(newValues);
    setShowForm(!showForm)
  }

  const EducationFields = () => (
    <>
      <Field id="school" handleChange={handleChange} label="School" 
      initValue={educationValues[currentId] ? educationValues[currentId]['school'] : ""}/>
      <Field id="degree" handleChange={handleChange} label="Degree" 
      initValue={educationValues[currentId] ? educationValues[currentId]['degree'] : ""}/>
      <Field id="start-date" handleChange={handleChange} label="Start Date" 
      initValue={educationValues[currentId] ? educationValues[currentId]['startDate'] : ""}/>
      <Field id="end-date" handleChange={handleChange} label="End Date" 
      initValue={educationValues[currentId] ? educationValues[currentId]['endDate'] : ""}/>
      <Field id="location" handleChange={handleChange} label="Location" 
      initValue={educationValues[currentId] ? educationValues[currentId]['location'] : ""}/>
      <FormBtns handleDelete={handleDelete} handleSave={handleSave} handleShowForm={handleShowForm}/>
    </>
  );


  return (
    <form className="education">
      <h2 className="title">  <img className="logo" src={educationPic} alt="" /> Education <button type="button" className={expanded ? "arrow clicked" : "arrow"} onClick={handleExpand}>⌄</button></h2>
    
      <div className={expanded ? "fields-container expanded" : "fields-container"}>
        {showForm ? <EducationFields/> :
              <>
                {Object.values(educationValues).map((values) => {
                  return <EducationSection key={values.id} values={values} handleShowForm={handleShowForm}/>
                })}
                <EducationBtn handleShowForm={handleShowForm}/>
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
