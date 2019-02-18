import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppContent from './AppContent'
import AppSideBar from './AppSideBar'



class App extends Component {

  render() {
    const { location, profiles } = this.props

    return (
      <div className="app-main">
        <AppSideBar location={location} profiles={profiles}/>
        <AppContent profiles={profiles}/>
      </div>
    )
  }
}

function mapStateToProps( {user: {profiles, sections}} ){
  return {
    profiles,
    sections
  }
}

export default connect(mapStateToProps)(App)