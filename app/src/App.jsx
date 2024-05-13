import { useState } from 'react'
import Content from "./content/Content"
import Menu from "./Menu"
import Appearance from './appereance/Appearance';
import CV from './cv/CV';
import { v4 as uuidv4 } from 'uuid';
import TemplateLoader from './TemplateLoader';

const initialPD = {
  name: "Josephine Meyers",
  email: "josephine.meyers@mail.co.uk",
  phone: "+44 3245 5521 5521",
  address: "London, UK"
  }

const initialEducationValues = {
  london: {
    school: 'London City University',
    degree: 'Bachelors in Economics',
    startDate: '08/2020',
    endDate: 'present',
    location: 'New York City, US',
    id: 'london',
    show:true,
    },
}

const initialExperienceValues = {
  umbrella: {
    name: 'Umbrella Inc.',
    position: 'UX & UI Designer',
    startDate: '08/2020',
    endDate: 'present',
    location: 'New York City, US',
    description: 'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
    id: 'umbrella',
    show: true,
    },
}

function App() {
  const [ isContent, setIsContent ] = useState(true);
  const [ currentColor, setCurrentColor ] = useState('#4D74A8');
  const [ backgroundColor, setBackgroundColor ] = useState('#EEF1F2')
  const [ currentFont, setCurrentFont ] = useState('serif');
  const [ pD, setPD ] = useState(initialPD);
  const [ educationValues, setEducationValues ] = useState(initialEducationValues)
  const [ educationCurrentID, setEducationCurrentID ] = useState(null)
  const [ experienceCurrentID, setExperienceCurrentID ] = useState(null)
  const [ experienceValues, setExperienceValues ] = useState(initialExperienceValues)
  
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

  function loadResume() {
    setPD(initialPD);
    setEducationValues(initialEducationValues);
    setExperienceValues(initialExperienceValues);
  }

  function clearResume() {
    setPD({});
    setEducationValues({});
    setExperienceValues({});
  }

  const handleVisuals = (event) => {
    const cv = document.querySelector('.cv');
    cv.className = `cv ${event.currentTarget.id}`;
  }

  const handleColorChange = (event) => {
    const color = event.currentTarget.value
    setCurrentColor(color);
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const luminance = 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);
    setBackgroundColor(luminance > 0.5 ? '#191919' : '#EEF1F2');
  }

  const handleChangeFont = (event) => {
    setCurrentFont(event.currentTarget.id)
    const fontDivs = document.querySelectorAll('.font')
    fontDivs.forEach((div) => div.className = 'font');
    event.currentTarget.className = 'font clicked'
  }

  document.documentElement.style.setProperty("--current-color", currentColor);
  document.documentElement.style.setProperty('--current-font', currentFont);
  document.documentElement.style.setProperty('--current-background-color', backgroundColor);

  const educationObject = {
    handleSave() {
      const school = document.querySelector('#school').value
      const degree = document.querySelector('#degree').value
      const startDate = document.querySelector('#start-date').value
      const endDate = document.querySelector('#end-date').value
      const location = document.querySelector('#location').value
      const id = uuidv4();
      
      const newValues = {...educationValues}
      let show = true;
      if(educationCurrentID) {
        show = newValues[educationCurrentID].show;
      }
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
        show,
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
    handleShowSection(event) {
      const id = event.currentTarget.parentElement.id
      const show = educationValues[id].show
      const newValues = {...educationValues}
      if(show === false){
        newValues[id].show = true
        
      } else {
        newValues[id].show = false
      }
      setEducationValues(newValues)
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
      
      const newValues = {...experienceValues}
      let show = true;
      if(experienceCurrentID) {
        show = experienceValues[experienceCurrentID].show
      }
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
        show,
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
    handleShowSection(event) {
      const id = event.currentTarget.parentElement.id
      const show = experienceValues[id].show
      const newValues = {...experienceValues}
      if(show === false){
        newValues[id].show = true
      } else {
        newValues[id].show = false
      }
      setExperienceValues(newValues)
    },
    experienceValues,
    currentID: experienceCurrentID,
  }

  return (
    <div className="body">
      <Menu handleMenuClick={handleMenuClick}/>
      <div>
        <TemplateLoader loadResume={loadResume} clearResume={clearResume}/>
        {isContent === true ? <Content handleDetailsChange={handleDetailsChange} educationObject={educationObject} experienceObject={experienceObject}/>
        : <Appearance handleVisuals={handleVisuals} handleColorChange={handleColorChange} handleChangeFont={handleChangeFont}/>}
      </div>
      <CV personalDetails={pD} educationValues={educationValues} experienceValues={experienceValues}/>
    </div>
  )
}

export default App







