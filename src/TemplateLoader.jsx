

export default function TemplateLoader({loadResume, clearResume}) {
  return(
    <div className='template-loader'>
      <button className="clear-resume" onClick={clearResume}>Clear Resume</button>
      <button className="load-example" onClick={loadResume}>Load Example</button>
    </div>
  )

}