import {Switch, Route, Redirect} from 'react-router-dom'

import HomeBanking from './components/HomeBanking'
import NotFound from './components/NotFound'
import LoginRoute from './components/LoginRoute'
import RouterRoute from './components/RouterRoute'
import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/ebank/login" component={LoginRoute} />
      <RouterRoute exact path="/" component={HomeBanking} />

      <Route exact path="/bad-path" component={NotFound} />

      <Redirect to="/bad-path" />
    </Switch>
  </>
)

export default App
