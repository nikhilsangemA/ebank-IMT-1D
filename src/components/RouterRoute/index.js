import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const RouterRoute = props => {
  const getToken = Cookies.get('jwt_token')
  if (getToken === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return <Route {...props} />
}

export default RouterRoute
