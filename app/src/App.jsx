import { useState } from 'react'
import Content from "./content/Content"
import Menu from "./Menu"
import Appearance from './appereance/Appearance';
import CV from './cv/CV';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [ isContent, setIsContent ] = useState(true);
  const [ currentColor, setCurrentColor ] = useState('lightblue');
  const [ currentFont, setCurrentFont ] = useState('serif');
  const [ pD, setPD ] = useState({name: "", email: "", phone: "", address: ""});
  const [ educationValues, setEducationValues ] = useState({})
  const [ educationCurrentID, setEducationCurrentID ] = useState(null)
  const [ experienceCurrentID, setExperienceCurrentID ] = useState(null)
  const [ experienceValues, setExperienceValues ] = useState({})
  
  const handleMenuClick = (event) => {
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'))
    if(event.currentTarget.id === 'content') {
      setIsContent(true);
    } else{
      setIsContent(false);
    }
    event.currentTarget.className = 'menu-btn active'
  };

  function handleDetailsChange(event) {
    const key = event.target.id;
    setPD({...pD, [key]: event.target.value});
  }


  const handleVisuals = (event) => {
    const cv = document.querySelector('.cv');
    cv.className = `cv ${event.currentTarget.id}`;
  }

  const handleColorChange = (event) => {
    setCurrentColor(event.currentTarget.value);
  }

  const handleChangeFont = (event) => {
    setCurrentFont(event.currentTarget.id)
  }

  document.documentElement.style.setProperty("--current-color", currentColor);
  document.documentElement.style.setProperty('--current-font', currentFont);

  const educationObject = {
    handleSave() {
      const school = document.querySelector('#school').value
      const degree = document.querySelector('#degree').value
      const startDate = document.querySelector('#start-date').value
      const endDate = document.querySelector('#end-date').value
      const location = document.querySelector('#location').value
      const id = uuidv4();
  
      if(school.length === 0 || degree.length === 0) return;
      
      const newValues = {...educationValues}
      delete newValues[educationCurrentID];
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
    },
    handleDelete() {
      const newValues = {...educationValues};
      delete newValues[educationCurrentID];
      setEducationValues(newValues);
    },
    handleID(event) {
      setEducationCurrentID(null);
      if(event.currentTarget.id) {
        setEducationCurrentID(event.currentTarget.id) 
      }
    },
    educationValues,
    currentID: educationCurrentID,
  }

  const experienceObject = {
    handleSave() {
      const name = document.querySelector('#comp-name').value
      const position = document.querySelector('#position').value
      const startDate = document.querySelector('#experience-start-date').value
      const endDate = document.querySelector('#experience-end-date').value
      const location = document.querySelector('#experience-location').value
      const description = document.querySelector('#description').value
      const id = uuidv4();
  
      if(name.length === 0 || position.length === 0) return;
      
      const newValues = {...experienceValues}
      delete newValues[experienceCurrentID];
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
    },
    handleDelete() {
      const newValues = {...experienceValues};
      delete newValues[experienceCurrentID];
      setExperienceValues(newValues);
    },
    handleID(event) {
      setExperienceCurrentID(null);
      if(event.currentTarget.id) {
        setExperienceCurrentID(event.currentTarget.id) 
      }
    },
    experienceValues,
    currentID: experienceCurrentID,
  }

  return (
    <div className="body">
      <Menu handleMenuClick={handleMenuClick}/>
      {isContent === true ? <Content handleDetailsChange={handleDetailsChange} educationObject={educationObject} experienceObject={experienceObject}/>
      : <Appearance handleVisuals={handleVisuals} handleColorChange={handleColorChange} handleChangeFont={handleChangeFont}/>}
      <CV personalDetails={pD} educationValues={educationValues} experienceValues={experienceValues}/>
    </div>
  )
}

export default App
