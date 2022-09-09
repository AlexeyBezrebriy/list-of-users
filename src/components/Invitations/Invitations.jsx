import { useEffect, useState } from "react"
import Users from "../Users/Users"
import "./Invitations.css"

function Invitations() {
  const url = "https://reqres.in/api/users?page=2"

  const [users, setUsers] = useState([])
  const [invites, setInvites] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((error) => console.warn(error))
      .finally(() => setLoading(false))
  }, [])

  function onChangeSearchValue(event) {
    setSearchValue(event.target.value.split(" ").join("").toLowerCase())
  }

  function onClickInvite(userId) {
    if (invites.includes(userId)) {
      setInvites((prev) => prev.filter((id) => id !== userId))
    } else {
      setInvites([...invites, userId])
    }
  }

  return (
    <div className="invitations__container">
      <input
        className="search-bar"
        type="search"
        onChange={onChangeSearchValue}
        placeholder="Search user"
        autoFocus
        required
      />
      <Users
        usersData={users}
        isLoading={isLoading}
        searchValue={searchValue}
        invites={invites}
        onClick={onClickInvite}
      />
      <button className="invitations__submit button">Send invitation</button>
      {/* <Success /> */}
    </div>
  )
}

export default Invitations
