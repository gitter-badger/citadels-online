import React, { Component } from 'react'
import PropTypes from 'prop-types'
import serialize from 'form-serialize'

import './LoginForm.scss'
import FormRow from '../../../../components/Form/FormRow'

class LoginForm extends Component {
  static propTypes = {
    logIn: PropTypes.func.isRequired
  }

  submitLoginForm = (e) => {
    e.preventDefault()
    const { logIn } = this.props
    const form = e.target
    const serializedFormData = serialize(form, { hash: true })

    console.log('serializedFormData')
    console.log(serializedFormData)

    logIn(serializedFormData)
  }

  render () {
    return (
      <div className="auth">
        <h2>Login:</h2>
        <form className="auth-form" onSubmit={this.submitLoginForm} action="/api/auth/login" method="POST">
          <FormRow
            label="Email:"
            name="email"
            type="email"
            isRequired
          />
          <FormRow
            label="Password:"
            name="password"
            type="password"
            isRequired
          />
          <div className="form-row">
            <input className="ui-btn ui-btn--blue" type="submit" value="Login" />
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
