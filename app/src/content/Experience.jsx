import { useState } from "react";
import Field from "./Field"
import suitcasePic from "../assets/suitcase.png"
import MoreBtn from "./MoreBtn";
import Section from "./Section";
import FormBtns from "./FormBtns";

export default function Experience({ handleSave, handleDelete, experienceValues, handleID, currentID, handleShowSection }) {
  const [ expanded, setExpanded ] = useState(false);
  const [ showForm, setShowForm ] = useState(false)


  
  const handleExpand = () => setExpanded(!expanded)

  const handleShowForm = (event) => {
    setShowForm(!showForm)
    handleID(event)
  }

  const onSave = () => {
    const name = document.querySelector('#comp-name').value
    const position = document.querySelector('#position').value
    if(name.length === 0 || position.length === 0) return;
    setShowForm(!showForm);
    handleSave()
  }

  const onDelete = () => {
    setShowForm(!showForm)
    handleDelete()
  }

  const ExperienceFields = () => (
    <>
      <Field id="comp-name" label="Company Name"
      initValue={experienceValues[currentID] ? experienceValues[currentID]['name'] : ""}
      isRequired={true}/>
      <Field id="position" label="Position Title"
      initValue={experienceValues[currentID] ? experienceValues[currentID]['position'] : ""}
      isRequired={true}/>
      <Field id="experience-start-date" label="Start Date"
      initValue={experienceValues[currentID] ? experienceValues[currentID]['startDate'] : ""}/>
      <Field id="experience-end-date" label="End Date"
      initValue={experienceValues[currentID] ? experienceValues[currentID]['endDate'] : ""}/>
      <Field id="experience-location" label="Location"
      initValue={experienceValues[currentID] ? experienceValues[currentID]['location'] : ""}/>
      <Field id="description" label="Description"
      initValue={experienceValues[currentID] ? experienceValues[currentID]['description'] : ""}/>
      <FormBtns handleDelete={onDelete} handleSave={onSave} handleShowForm={handleShowForm}/>
    </>
  );

  return (
    <form className="experience place">
    <h2 className="title"> <img className="logo" src={suitcasePic} alt="" />  Experience <button type="button" onClick={handleExpand} className={expanded ? "arrow clicked" : "arrow"}>⌄</button></h2>
    
    <div className={expanded ? "fields-container expanded" : "fields-container"}>
      {showForm ? <ExperienceFields/> :
              <>
                {Object.values(experienceValues).map((values) => {
                  return <Section key={values.id} values={values} handleShowForm={handleShowForm} handleShowSection={handleShowSection} showSection={values.show}/>
                })}
                <MoreBtn handleShowForm={handleShowForm} text={'+ Experience'}/>
              </>
        }
    </div>


  </form>
  )
}