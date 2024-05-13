

export default function Header({name , email, phone, address}) {
  return(
    <div className="header">
      <h1>{name}</h1>
      <div className="header-wrapper">
        {email ? <div className="email">  {email}</div>: ""}
        {phone ? <div className="phone">  {phone}</div>: ""}
        {address ? <div className="address"> {address}</div>: ""}
      </div>
    </div>
  )
}