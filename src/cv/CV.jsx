import Header from "./Header"
import Information from "./Information"

export default function CV({personalDetails, educationValues, experienceValues}) {
  return(
    <div className="cv top">
      <Header name={personalDetails.name} email={personalDetails.email} phone={personalDetails.phone} address={personalDetails.address}/>
      <div className="info-wrapper">
        <Information title={'Education'} sections={educationValues} isEducation={true}/>
        <Information title={'Professional Experience'} sections={experienceValues}/>
      </div>
    </div>
  )
}
