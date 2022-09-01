import React from "react"
import "./User.css"

const User = () => {
  return (
    <li className="user__item">
      <img
        className="user__icon"
        src="https://reqres.in/img/faces/8-image.jpg"
        alt=""
      />
      <div className="user__data">
        <div className="user__name">First name Last Name</div>
        <div className="user__email">email</div>
      </div>
      <label className="user__status">+</label>
    </li>
  )
}

export default User
