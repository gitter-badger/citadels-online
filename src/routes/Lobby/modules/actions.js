import {
  ENTERING_LOBBY
} from './constants'

export const enteringLobby = () => {
  return (dispatch, getState) => {
    dispatch({
      type: ENTERING_LOBBY
    })
  }
}

export const actions = {
  enteringLobby
}
