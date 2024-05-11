export default function Header({name , email, phone, address}) {
  return(
    <div className="header">
      <h1>{name}</h1>
      <div className="header-wrapper">
        <div className="email">{email}</div>
        <div className="phone">{phone}</div>
        <div className="address">{address}</div>
      </div>
    </div>
  )
}