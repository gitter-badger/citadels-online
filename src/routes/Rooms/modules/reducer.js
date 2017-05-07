import {
  REQ_GET_ROOMS_START,
  REQ_GET_ROOMS_SUCCESS,
  REQ_GET_ROOMS_FAIL
} from './constants'

const ACTION_HANDLERS = {
  [REQ_GET_ROOMS_START]: (state, action) => { return { ...state, listFetching: true } },
  [REQ_GET_ROOMS_SUCCESS]: (state, action) => {
    return {
      ...state,
      listFetching: false,
      list: action.payload
    }
  },
  [REQ_GET_ROOMS_FAIL]: (state, action) => { return { ...state, listFetching: false } }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  list: null,
  listFetching: false
}

export default function roomsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
