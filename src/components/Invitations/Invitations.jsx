import { useEffect, useState } from "react"
import Users from "../Users/Users"
import Success from "./../Success/Success"
import "./Invitations.css"

function Invitations() {
  const url = "https://reqres.in/api/users?page=2"

  const [users, setUsers] = useState([])
  const [invites, setInvites] = useState([])
  const [success, setSuccess] = useState(false)
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

  function onClickSendInvites() {
    if (invites.length) {
      setSuccess(true)
    }
  }

  return (
    <div className="invitations__container">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <>
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
          <button
            onClick={onClickSendInvites}
            className="invitations__submit button"
          >
            Send invitation
          </button>
        </>
      )}
    </div>
  )
}

export default Invitations
