import { useState } from "react"
import Field from "./Field"
import educationPic from "../assets/education.png"
import showPic from "../assets/view.png"
import hidePic from "../assets/hide.png"
import binPic from "../assets/bin.png"

function EducationSection({ values, handleShowForm }) {
  const [ show, setShow ] = useState(true);

  const handleShow = () => {
    setShow(!show)};

  return(
    <div type="button" className="education-section" id={values.degree}  onClick={handleShowForm}>
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
  const [ clicked, setClicked ] = useState(false);
  const [ showForm, setShowForm ] = useState(false)
  const [ currentId, setCurrentId ] = useState(null)
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
  const [ educationValues, setEducationValues ] = useState({})
  // const [ sectionsArray, setSectionsArray ] = useState([])




  
  const handleClick = () => setClicked(!clicked)
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
    
    const newValues = {...educationValues}
    delete newValues[currentId];
    const newObject = {
      ...newValues,
      [degree]: {
      school,
      degree,
      startDate,
      endDate,
      location,
      },
    }
    setEducationValues(newObject);
    setShowForm(!showForm);
    // setSectionsArray([...sectionsArray, newValues]);
      
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
      <div className="form-btns">
        <button className="form-btn delete" type="button" > <img src={binPic} alt="" />Delete</button>
        <button className="form-btn cancel" type="button" onClick={handleShowForm}>Cancel</button>
        <button className="form-btn save" type="button" onClick={handleSave}>Save</button>
      </div>
    </>
  );


  return (
    <form className="education">
    <h2 className="title">  <img className="logo" src={educationPic} alt="" /> Education <button type="button" className={clicked ? "arrow clicked" : "arrow"} onClick={handleClick}>⌄</button></h2>
   
    <div className={clicked ? "fields-container expanded" : "fields-container"}>
      {showForm ? <EducationFields/> :
            <>
              {Object.values(educationValues).map((values) => {
                return <EducationSection key={values.degree} values={values} handleShowForm={handleShowForm}/>
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
