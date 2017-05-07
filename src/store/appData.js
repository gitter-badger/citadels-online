// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  userName: 'New user'
}
export default function appData (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
