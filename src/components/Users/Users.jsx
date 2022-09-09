import React from "react"
import User from "./../User/User"
import Loader from "./Loader"
import "./Users.css"

const Users = ({ usersData, isLoading, searchValue, onClick, invites }) => {
  function displayUser(usersData) {
    return usersData
      .filter((obj) => {
        const fullName = (obj.first_name + obj.last_name).toLowerCase()
        return (
          fullName.includes(searchValue) ||
          obj.email.toLowerCase().includes(searchValue)
        )
      })
      .map((obj) => {
        return (
          <User
            isInvited={invites.includes(obj.id)}
            key={obj.id}
            {...obj}
            onClick={onClick}
          />
        )
      })
  }

  return (
    <ul className="users__table">
      {isLoading ? (
        <>
          <Loader />
          <Loader />
          <Loader />
        </>
      ) : (
        displayUser(usersData)
      )}
    </ul>
  )
}
export default Users
