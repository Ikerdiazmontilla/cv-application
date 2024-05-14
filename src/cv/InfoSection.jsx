export default function InfoSection({values}) {
  return(
    <div className="info-section" key={values.key}>
      <div className="date">{ values.date.startDate || values.date.endDate ? `${values.date.startDate} - ${values.date.endDate}` : ""}</div>
      <div className="title"><strong>{values.title}</strong></div>
      <div className="location">{values.location}</div>
      <div>
        <div className="subtitle">{values.subtitle}</div>
        {values.description ? <div className="description">{values.description}</div> : ""}
      </div>
    </div>

  )
}