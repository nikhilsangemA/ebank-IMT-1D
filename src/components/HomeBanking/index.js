import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const HomeBanking = props => {
  const logoutAccess = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <div className="mainContainer">
      <nav className="nav-Cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <button type="button" onClick={logoutAccess}>
          Logout
        </button>
      </nav>
      <div className="bottom-cont">
        <h1>Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="website-logo2"
        />
      </div>
    </div>
  )
}

export default withRouter(HomeBanking)
