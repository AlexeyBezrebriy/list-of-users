import React from "react"
import plus from "../../img/free-icon-plus.png"
import minus from "../../img/free-icon-minus.png"
import "./User.css"

const User = ({
  id,
  email,
  first_name,
  last_name,
  avatar,
  onClick,
  isInvited,
}) => {
  return (
    <li className="user__item">
      <img className="user__icon" src={avatar} alt="" />
      <div className="user__data">
        <div className="user__name">
          {first_name} {last_name}
        </div>
        <div className="user__email">{email}</div>
      </div>
      <img
        onClick={() => onClick(id)}
        src={isInvited ? minus : plus}
        className="user__status"
        alt="add btn"
      />
    </li>
  )
}

export default User
