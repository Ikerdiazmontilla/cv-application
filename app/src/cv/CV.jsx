import Header from "./Header"
import Information from "./Information"

export default function CV({personalDetails, educationValues}) {
  return(
    <div className="cv top">
      <Header name={personalDetails.name} email={personalDetails.email} phone={personalDetails.phone} address={personalDetails.address}/>
      <Information title={'Education'} sections={educationValues} isEducation={true}/>
      {/* <Information title={'Professional Experience'}/> */}
    </div>
  )
}
