import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'react-toolbox/lib/button'

import './Lobby.scss'

class Lobby extends Component {
  static propTypes = {
    enteringLobby: PropTypes.func,
    params: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  }

  componentDidMount () {
    const { enteringLobby } = this.props
    enteringLobby()
  }

  render () {
    // пример как можно вытащить урл страницы. хз как правильно
    const {
      params: {
        url
      }
    } = this.props

    return (
      <div className="lobby">
        <h3>Lobby room <b>#{url}</b></h3>
        <Button icon="done" label="Ready" accent raised primary/>
      </div>
    )
  }
}

export default Lobby
