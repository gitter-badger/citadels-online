import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = (props) => (
  <div className="header">
    <nav className="header-nav">
      <IndexLink to="/" activeClassName="route--active">
        Главная
      </IndexLink>
      {' · '}
      <Link to="/rooms" activeClassName="route--active">
        Комнаты
      </Link>
    </nav>
    <div className="user-info">
      Привет, {props.userName}
    </div>
  </div>
)

Header.propTypes = {
  userName: PropTypes.string
}

export default Header
