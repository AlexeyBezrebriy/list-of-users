import Users from "../Users/Users"
import "./Invitations.css"
import Success from "./../Success/Success"

function Invitations() {
  return (
    <div className="invitations__container">
      {/* <input
        className="search-bar"
        type="search"
        placeholder="Search user"
        autoFocus
        required
      />
      <Users />
      <button className="invitations__submit button">Send invitation</button> */}
      <Success />
    </div>
  )
}

export default Invitations
