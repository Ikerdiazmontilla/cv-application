import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Header({name , email, phone, address}) {
  return(
    <div className="header">
      <h1>{name}</h1>
      <div className="header-wrapper">
        {email ? <div className="email"><FontAwesomeIcon icon={faEnvelope} />  {email}</div>: ""}
        {phone ? <div className="phone"><FontAwesomeIcon icon={faPhone} />  {phone}</div>: ""}
        {address ? <div className="address"><FontAwesomeIcon icon={faLocationDot} /> {address}</div>: ""}
      </div>
    </div>
  )
}