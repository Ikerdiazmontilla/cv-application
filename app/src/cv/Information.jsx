import InfoSection from "./InfoSection"

export default function Information({ title, sections, isEducation = false }) {
  
  return(
    <div className="information">
      {Object.keys(sections).length === 0 ? "": <h3>{title}</h3>}
      {Object.values(sections).map((section) => {
        let values;
          if(isEducation === true) { 
            values = {
              title: section.school,
              subtitle: section.degree,
              date: {startDate:section.startDate, endDate:section.endDate},
              location: section.location,
              key: section.id,
            }

          } else {
            values = {
              title: section.name,
              subtitle: section.position,
              date: {startDate: section.startDate, endDate: section.endDate},
              location: section.location,
              key: section.id,
              description: section.description,
            }
          } 
          if (section.show === true) {
            return <InfoSection key={section.id} values={values}/>
          }
      })}
    </div>
  )
}