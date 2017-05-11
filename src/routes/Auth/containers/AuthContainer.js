import { connect } from 'react-redux'

import Auth from '../components/Auth'
import { logIn, logOut } from '../modules/actions'

const mapDispatchToProps = {
  logIn: logIn,
  logOut: logOut
}

const mapStateToProps = (state) => ({
  appData : state.appData
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
