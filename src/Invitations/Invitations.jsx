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

      <ul className="users__table">
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
      </ul>
      <button className="invitations__submit">Send invitation</button>
    </div>
  )
}

export default Invitations
