import {
  ENTERING_LOBBY
} from './constants'

// import {
//   URL
// } from 'modules/constants'

const wsFunc = () => {}

export const enteringLobby = () => {
  return (dispatch, getState) => {
    wsFunc()

    dispatch({
      type: ENTERING_LOBBY
    })
  }
}

export const actions = {
  enteringLobby
}
