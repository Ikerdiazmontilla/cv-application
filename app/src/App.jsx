import { useState } from 'react'
import Content from "./content/Content"
import Menu from "./Menu"

function App() {
  const [ isContent, setIsContent ] = useState(true);
  
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

  return (
    <div className="body">
      <Menu handleMenuClick={handleMenuClick}/>
      {isContent === true ? <Content handleChange={handleChange}/>
      : <p>Bruh</p>}
    <div>Pizza</div>
    </div>
  )
}

export default App
