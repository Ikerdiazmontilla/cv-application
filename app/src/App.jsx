// import { useState } from 'react'
import Content from "./content/Content"

function App() {

  function handleChange() {}

  return (
    <div className="body">
    <p>Mario</p>
      <Content handleChange={handleChange}/>
    <div>Pizza</div>
    </div>
  )
}

export default App
