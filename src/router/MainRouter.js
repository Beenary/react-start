import React, { Component } from 'react'
import { 
  Route,
  Switch,
  Router
} from "react-router-dom"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
import { setAuth } from '../auth/AuthActions'
import createHistory from 'history/createBrowserHistory';

import Cookies from 'universal-cookie'
import { connect } from 'react-redux'
import { handleSetUser } from '../user/UserActions'
import AuthLogin from '../auth/AuthLogin'
import App from '../app/App'

export const history = createHistory();   

const cookies = new Cookies

class AppRouter extends Component {

  state ={
    loading: true
  }

  componentDidMount(){
    this.handleInitialData()
  }

  handleInitialData = () => {
    const { dispatch } = this.props
    const cookie =  cookies.get('x-access')
    
    if(cookie !== undefined) {
      dispatch(setAuth(true))
      dispatch(handleSetUser(cookie))
        .then(() => this.setState({loading: false}))
        .catch((error) => console.log(error))
    }
    else {
      this.setState({loading: false})
    }
  }


  render() {
    const { loading } = this.state
    const { authed } = this.props

    return loading === true ? <h1>Loading...</h1> : (
      <Router history={history}>
        <Switch>
          <PublicRoute authed={authed} path='/auth' component={AuthLogin} />
          <PrivateRoute authed={authed} path="/" component={App} />
          <Route render={() => <h1>Oops! Esta ruta no existe</h1>} />
        </Switch>
      </Router>
    )
  }
}

function mapStateToProps({auth: { isAuthenticated }, user}){
  return{
    authed: isAuthenticated && user.profile !== undefined,
    user 
  }
}

export default connect(mapStateToProps)(AppRouter)
