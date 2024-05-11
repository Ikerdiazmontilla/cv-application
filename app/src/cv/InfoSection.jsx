export default function InfoSection({values}) {
  return(
    <div className="info-section" key={values.key}>
      <div className="date">{values.date}</div>
      <div className="title">{values.title}</div>
      <div className="location">{values.location}</div>
      <div className="subtitle">{values.subtitle}</div>
      {values.description ? <div className="description">{values.description}</div> : ""}
    </div>

  )
}