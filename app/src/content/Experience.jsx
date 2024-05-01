import { useState } from "react";
import Field from "./Field"
import suitcasePic from "../assets/suitcase.png"

export default function Experience({ handleChange }) {
  const [ clicked, setClicked ] = useState(false);
  
  const handleClick = () => setClicked(!clicked)

  const ExperienceFields = () => (
    <>
      <Field id="comp-name" handleChange={handleChange} label="Company Name"/>
      <Field id="position" handleChange={handleChange} label="Position Title"/>
      <Field id="experience-start-date" handleChange={handleChange} label="Start Date"/>
      <Field id="experience-end-date" handleChange={handleChange} label="End Date"/>
      <Field id="experience-location" handleChange={handleChange} label="Location"/>
      <Field id="description" handleChange={handleChange} label="Description"/>
    </>
  );

  return (
    <fieldset>
    <h2 className="title"> <img className="logo" src={suitcasePic} alt="" />  Experience <button type="button" onClick={handleClick} className={clicked ? "arrow clicked" : "arrow"}>⌄</button></h2>
    
    <div className={clicked ? "fields-container expanded" : "fields-container"}>
      <ExperienceFields/>
    </div>


  </fieldset>
  )
}