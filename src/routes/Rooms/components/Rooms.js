import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import './Rooms.scss'

class Rooms extends Component {
  static propTypes = {
    rooms: PropTypes.shape({
      list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        users: PropTypes.number,
        url: PropTypes.string.isRequired
      }))
    }),
    loadRooms: PropTypes.func.isRequired
  }

  componentWillMount () {
    const { loadRooms } = this.props

    loadRooms()
  }

  render () {
    const {
      rooms: {
        list
      }
    } = this.props

    return (
      <div className="rooms-list">
        {list
          ? list.map((lobby, idx) => {
            return (
              <Link to={`/lobby/${lobby.url}`} className="rooms-list__one" key={lobby.id}>
                <span>{lobby.name}, </span>
                <span>{lobby.users} человек</span>
              </Link>
            )
          })
          : <span>Нет комнат</span>
        }
      </div>
    )
  }
}

export default Rooms
