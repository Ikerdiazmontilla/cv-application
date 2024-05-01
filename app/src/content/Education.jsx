import { useState } from "react"
import Field from "./Field"
import educationPic from "../assets/education.png"

export default function Education({ handleChange }) {
  const [ clicked, setClicked ] = useState(false);
  
  const handleClick = () => setClicked(!clicked)

  const EducationFields = () => (
    <>
      <Field id="school" handleChange={handleChange} label="School"/>
      <Field id="degree" handleChange={handleChange} label="Degree"/>
      <Field id="start-date" handleChange={handleChange} label="Start Date"/>
      <Field id="end-date" handleChange={handleChange} label="End Date"/>
      <Field id="location" handleChange={handleChange} label="Location"/>
    </>
  );

  return (
    <fieldset>
    <h2 className="title">  <img className="logo" src={educationPic} alt="" /> Education <button type="button" className={clicked ? "arrow clicked" : "arrow"} onClick={handleClick}>⌄</button></h2>
   
    <div className={clicked ? "fields-container expanded" : "fields-container"}>
      <EducationFields/>
    </div>
      
 
  </fieldset>
  )
}
