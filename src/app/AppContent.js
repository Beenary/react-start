import React, { Component } from 'react'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

class AppContent extends Component {

  componentDidMount(){
    const { history, location, profiles } = this.props
  }

  render() {
    const { filteredRoutes } = this.props
    const routes = filteredRoutes.reduce((acc, currVaule) => (acc.concat(currVaule.routes)), [])
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto',
        minHeight: 0,
        height: '100%',
        overflow: 'auto'
      }}>
      <div className="app-content" style={{ height: '100%' }}>
        <Switch>
          {routes.map(({id, exact, component, path}) => (
            <Route 
              key={id}
              path={path}
              exact={exact}
              component={component}
            />
          ))}
          <Route render={() => 
            <div>
              <h1>Oops! Esta ruta no existe</h1>
            </div>
          } />
        </Switch>   
      </div>
      </div>
    )
  }
}

export default withRouter(AppContent)