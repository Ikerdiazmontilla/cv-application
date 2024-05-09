import Field from "./Field"

export default function PersonalDetails({ handleChange }) {


  return(
    <form className="personal-details place">
      <h2>Personal Details</h2>

      <Field id="full-name" handleChange={handleChange} label="Full Name"/>
      <Field id="email" handleChange={handleChange} label="Email"/>
      <Field id="phone" handleChange={handleChange} label="Phone Number"/>
      <Field id="address" handleChange={handleChange} label="Address"/>
    </form>
  )
}