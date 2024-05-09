import { useState } from 'react'
import Content from "./content/Content"
import Menu from "./Menu"
import Appearance from './appereance/Appearance';
import CV from './cv/CV';

function App() {
  const [ isContent, setIsContent ] = useState(true);
  const [ currentColor, setCurrentColor ] = useState('blue');
  const [ currentFont, setCurrentFont ] = useState('serif');
  
  const handleMenuClick = (event) => {
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'))
    if(event.currentTarget.id === 'content') {
      setIsContent(true);
    } else{
      setIsContent(false);
    }
    event.currentTarget.className = 'menu-btn active'
  };
  function handleChange() {}

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

  return (
    <div className="body">
      <Menu handleMenuClick={handleMenuClick}/>
      {isContent === true ? <Content handleChange={handleChange}/>
      : <Appearance handleVisuals={handleVisuals} handleColorChange={handleColorChange} handleChangeFont={handleChangeFont}/>}
      <CV/>
    </div>
  )
}

export default App
