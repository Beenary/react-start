import React, { Component } from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie'
import {handleRemoveAuth} from '../auth/AuthActions'

class UserProfile extends Component {

  remove = () => {
    const { dispatch } = this.props
    dispatch(handleRemoveAuth())
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <button onClick={this.remove}>salir</button>
      </div>
    );
  }
}

function mapStateToProps({user}){
  return{
    user: user.profile
  }
}

export default connect(mapStateToProps)(UserProfile);