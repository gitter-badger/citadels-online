import { connect } from 'react-redux'

import { setUserDataFromCookie } from 'store/appData'
import { checkUserAuth } from 'routes/Auth/modules/actions'

import CoreLayout from './CoreLayout'

const mapDispatchToProps = {
  setUserDataFromCookie: setUserDataFromCookie,
  checkUserAuth: checkUserAuth
}

const mapStateToProps = (state) => ({
  appData : state.appData
})

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
