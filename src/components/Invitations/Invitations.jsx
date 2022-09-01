import Users from "../Users/Users"
import "./Invitations.css"

function Invitations() {
  return (
    <div className="invitations__container">
      <input
        className="search-bar"
        type="search"
        placeholder="Search user"
        autoFocus
        required
      />
      <Users />
      <button className="invitations__submit">Send invitation</button>
    </div>
  )
}

export default Invitations
