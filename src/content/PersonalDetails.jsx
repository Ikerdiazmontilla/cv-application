import Field from "./Field"

export default function PersonalDetails({ handleChange }) {


  return(
    <form className="personal-details place">
      <h2>Personal Details</h2>

      <Field id="name" handleChange={handleChange} label="Full Name" initValue="Average Worker"/>
      <Field id="email" handleChange={handleChange} label="Email" initValue="average.email@gmail.com"/>
      <Field id="phone" handleChange={handleChange} label="Phone Number" initValue="+44 3245 5521 5521"/>
      <Field id="address" handleChange={handleChange} label="Address" initValue="Average Street, UK"/>
    </form>
  )
}