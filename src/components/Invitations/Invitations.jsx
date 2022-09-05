import { useEffect, useState } from "react"
import Users from "../Users/Users"
import "./Invitations.css"

function Invitations() {
  const url = "https://reqres.in/api/users?page=2"

  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((error) => console.warn(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="invitations__container">
      <input
        className="search-bar"
        type="search"
        placeholder="Search user"
        autoFocus
        required
      />
      <Users usersData={users} />
      <button className="invitations__submit button">Send invitation</button>
      {/* <Success /> */}
    </div>
  )
}

export default Invitations
