// import { useState } from 'react'
import Content from "./content/Content"
import Menu from "./Menu"

function App() {

  function handleChange() {}

  return (
    <div className="body">
      <Menu/>
      <Content handleChange={handleChange}/>
    <div>Pizza</div>
    </div>
  )
}

export default App
