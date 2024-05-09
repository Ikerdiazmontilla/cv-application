export default function Layout({handleVisuals}) {
return(
  <div className="place">
      <h2 className="title">Layout</h2>
      <div className="visuals">
        <button className="visual-container" id="top" onClick={handleVisuals}>
          <div className="top-visual visual"></div>
          Top
        </button>
        <button className="visual-container" id="left" onClick={handleVisuals}>
          <div className="left-visual visual"></div>
          Left
        </button>
        <button className="visual-container right" id="right" onClick={handleVisuals}>
          <div className="right-visual visual"></div>
          Right
        </button>
      </div>
  </div>

)
}