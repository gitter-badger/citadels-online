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
      {props.isLogin
        ? <span>Привет, {props.userName} {' · '} <Link to="/auth">Logout</Link></span>
        : <Link to="/auth">Login</Link>
      }
    </div>
  </div>
)

Header.propTypes = {
  userName: PropTypes.string,
  isLogin: PropTypes.bool.isRequired
}

export default Header
