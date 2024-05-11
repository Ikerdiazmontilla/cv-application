import InfoSection from "./InfoSection"

export default function Information({ title, sections, isEducation = false }) {
  
  return(
    <div>
      <h3>{title}</h3>
      {Object.values(sections).map((section) => {
        let values;
          if(isEducation === true) { 
            values = {
              title: section.school,
              subtitle: section.degree,
              date: `${section.startDate} - ${section.endDate}`,
              location: section.location,
              key: section.id,
            }
          } else {
            values = {
              title: section.name,
              subtitle: section.position,
              date: `${section.startDate} - ${section.endDate}`,
              location: section.location,
              key: section.id,
              description: section.description,
            }
          } 
          return <InfoSection key={section.id} values={values}/>
      })}
    </div>
  )
}