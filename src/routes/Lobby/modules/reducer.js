import {
  ENTERING_LOBBY
} from './constants'

const ACTION_HANDLERS = {
  [ENTERING_LOBBY]: (state, action) => { return { ...state, isEnter: true } }
}

const initialState = {
  isEnter: false
}

export default function lobbyReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
