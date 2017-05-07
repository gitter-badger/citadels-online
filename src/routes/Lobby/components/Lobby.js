import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
        lobby page <b>#{url}</b>
      </div>
    )
  }
}

export default Lobby
