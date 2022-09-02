import logo from "../../img/success.png"
import "./Success.css"

const Success = () => {
  return (
    <div className="success__container">
      <div className="success__logo">
        <img src={logo} className="success__logo" alt="img is not loaded" />
      </div>
      <div className="success__inform">
        <h2>Congratulation</h2>
        <p>your invites are sended</p>
      </div>
      <a href="/" className="back-btn button">
        Back
      </a>
    </div>
  )
}

export default Success
