import React from "react"
import User from "./../User/User"
import Loader from "./Loader"
import "./Users.css"

const Users = ({ usersData, isLoading }) => {
  function displayUser(usersData) {
    return usersData.map((obj) => {
      return <User key={obj.id} {...obj} />
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
