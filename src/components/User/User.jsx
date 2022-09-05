import React from "react"
import "./User.css"

const User = ({ email, first_name, last_name, avatar }) => {
  return (
    <li className="user__item">
      <img className="user__icon" src={avatar} alt="" />
      <div className="user__data">
        <div className="user__name">
          {first_name} {last_name}
        </div>
        <div className="user__email">{email}</div>
      </div>
      <label className="user__status">+</label>
    </li>
  )
}

export default User
