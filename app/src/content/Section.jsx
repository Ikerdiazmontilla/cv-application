// import { useState } from "react"
import showPic from "../assets/view.png"
import hidePic from "../assets/hide.png"

export default function Section({ values, handleShowForm, isEducation = false , handleShowSection, showSection}) {



  return(
    <div type="button" className={isEducation? "education section": "experience section"} id={values.id}  onClick={handleShowForm}>
        <p>{isEducation ? values.school : values.name}</p>
        <button type="button" className="show" onClick={ (e) => {
          e.stopPropagation();
          handleShowSection(e);
        }}>
          <img src={ showSection &&  showPic || hidePic} alt="show title" />
        </button>
    </div>
  )
}