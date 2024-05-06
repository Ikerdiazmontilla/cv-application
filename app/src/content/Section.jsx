import { useState } from "react"
import showPic from "../assets/view.png"
import hidePic from "../assets/hide.png"

export default function Section({ values, handleShowForm, isEducation }) {
  const [ show, setShow ] = useState(true);

  const handleShow = () => {
    setShow(!show)};

  return(
    <div type="button" className={isEducation? "education section": "experience section"} id={values.id}  onClick={handleShowForm}>
        <p>{isEducation ? values.school : values.name}</p>
        <button type="button" className="show" onClick={ (e) => {
          e.stopPropagation();
          handleShow();
        }}>
          <img src={ show &&  showPic || hidePic} alt="show title" />
        </button>
    </div>
  )
}