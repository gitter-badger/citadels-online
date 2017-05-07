import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends Component {
  static propTypes = {
    children : PropTypes.element.isRequired,
    appData : PropTypes.shape({
      userName: PropTypes.string
    })
  }

  render () {
    const {
      children,
      appData: {
        userName
      }
    } = this.props

    return (
      <div className="container text-center">
        <Header userName={userName} />
        <div className="core-layout__viewport">
          {children}
        </div>
      </div>
    )
  }
}

export default CoreLayout
