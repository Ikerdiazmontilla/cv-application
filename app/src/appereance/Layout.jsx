export default function Layout() {
return(
  <div className="place">
      <h2 className="title">Layout</h2>
      <div className="visuals">
        <button className="visual-container">
          <div className="top-visual visual"></div>
          Top
        </button>
        <button className="visual-container">
          <div className="left-visual visual"></div>
          Left
        </button>
        <button className="visual-container">
          <div className="right-visual visual"></div>
          Right
        </button>
      </div>
  </div>

)
}