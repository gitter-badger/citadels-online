import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Auth.scss'

import LoginForm from './LoginForm/LoginForm'

class Auth extends Component {
  static propTypes = {
    logIn: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
    appData: PropTypes.shape({
      isLogin: PropTypes.bool.isRequired,
      userName: PropTypes.string
    }).isRequired
  }

  logOutClick = (e) => {
    const { logOut } = this.props
    logOut()
  }

  render () {
    const {
      logIn,
      appData: {
        isLogin,
        userName
      }
    } = this.props

    return (
      <div className="auth">
        {isLogin
          ? <span>Hello {userName}! <button onClick={this.logOutClick}>Logout!</button></span>
          : <LoginForm logIn={logIn} />
        }
      </div>
    )
  }
}

export default Auth
