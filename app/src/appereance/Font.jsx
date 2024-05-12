export default function Font({ handleChangeFont }) {
  return(
    <div className="place">
      <h2 className="title">Font</h2>

      <div className="font-wrapper">
        <div className="font clicked" id="serif" onClick={handleChangeFont}>
          <p>Aa</p>
          <p>Serif</p>
        </div>
        <div className="font" id="sans-serif" onClick={handleChangeFont}>
          <p>Aa</p>
          <p>Sans</p>
        </div>
        <div className="font" id="monospace" onClick={handleChangeFont}>
          <p>Aa</p>
          <p>Mono</p>
        </div>
      </div>
    </div>
  )
}