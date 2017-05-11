import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, NavDrawer, Panel, AppBar } from 'react-toolbox';
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

  state = {
    drawerActive: false
  }

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive })
  }

  render () {
    const {
      children,
      appData: {
        userName
      }
    } = this.props

    return (
      <Layout>
        <NavDrawer
          active={this.state.drawerActive}
          permanentAt="xxxl"
          onOverlayClick={this.toggleDrawerActive}
        >
          <p style={{ padding: '1.8rem' }}>
            Navigation, account switcher, etc. go here.
          </p>
        </NavDrawer>
        <Panel>
          <AppBar leftIcon="menu" onLeftIconClick={this.toggleDrawerActive}>
            <Header userName={userName} />
          </AppBar>
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
            {children}
          </div>
        </Panel>
      </Layout>
    )
  }
}

export default CoreLayout
