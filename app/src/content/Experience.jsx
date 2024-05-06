import { useState } from "react";
import Field from "./Field"
import suitcasePic from "../assets/suitcase.png"
import MoreBtn from "./MoreBtn";
import { v4 as uuidv4 } from 'uuid';
import Section from "./Section";
import FormBtns from "./FormBtns";

export default function Experience({ handleChange }) {
  const [ expanded, setExpanded ] = useState(false);
  const [ showForm, setShowForm ] = useState(false)
  const [ currentId, setCurrentId ] = useState(null)
  const [ experienceValues, setExperienceValues ] = useState({})

  
  const handleExpand = () => setExpanded(!expanded)

  const handleShowForm = (event) => {
    setCurrentId(null);
    if(event.currentTarget.id) {
      setCurrentId(event.currentTarget.id) 
    }
    setShowForm(!showForm)
  }

  const handleSave = () => {
    const name = document.querySelector('#comp-name').value
    const position = document.querySelector('#position').value
    const startDate = document.querySelector('#experience-start-date').value
    const endDate = document.querySelector('#experience-end-date').value
    const location = document.querySelector('#experience-location').value
    const description = document.querySelector('#description').value
    const id = uuidv4();
    
    const newValues = {...experienceValues}
    delete newValues[currentId];
    const newObject = {
      ...newValues,
      [id]: {
      name,
      position,
      startDate,
      endDate,
      location,
      description,
      id,
      },
    }
    setExperienceValues(newObject);
    setShowForm(!showForm);
  }

  const handleDelete = () => {
    const newValues = {...experienceValues};
    delete newValues[currentId];
    setExperienceValues(newValues);
    setShowForm(!showForm)
  }

  const ExperienceFields = () => (
    <>
      <Field id="comp-name" handleChange={handleChange} label="Company Name"
      initValue={experienceValues[currentId] ? experienceValues[currentId]['name'] : ""}/>
      <Field id="position" handleChange={handleChange} label="Position Title"
      initValue={experienceValues[currentId] ? experienceValues[currentId]['position'] : ""}/>
      <Field id="experience-start-date" handleChange={handleChange} label="Start Date"
      initValue={experienceValues[currentId] ? experienceValues[currentId]['startDate'] : ""}/>
      <Field id="experience-end-date" handleChange={handleChange} label="End Date"
      initValue={experienceValues[currentId] ? experienceValues[currentId]['endDate'] : ""}/>
      <Field id="experience-location" handleChange={handleChange} label="Location"
      initValue={experienceValues[currentId] ? experienceValues[currentId]['location'] : ""}/>
      <Field id="description" handleChange={handleChange} label="Description"
      initValue={experienceValues[currentId] ? experienceValues[currentId]['description'] : ""}/>
      <FormBtns handleDelete={handleDelete} handleSave={handleSave} handleShowForm={handleShowForm}/>
    </>
  );

  return (
    <form className="experience">
    <h2 className="title"> <img className="logo" src={suitcasePic} alt="" />  Experience <button type="button" onClick={handleExpand} className={expanded ? "arrow clicked" : "arrow"}>⌄</button></h2>
    
    <div className={expanded ? "fields-container expanded" : "fields-container"}>
      {showForm ? <ExperienceFields/> :
              <>
                {Object.values(experienceValues).map((values) => {
                  return <Section key={values.id} values={values} handleShowForm={handleShowForm}/>
                })}
                <MoreBtn handleShowForm={handleShowForm} text={'+ Experience'}/>
              </>
        }
    </div>


  </form>
  )
}