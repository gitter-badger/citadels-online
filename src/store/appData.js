import {
  REQ_POST_LOGIN_FORM_START,
  REQ_POST_LOGIN_FORM_SUCCESS,
  REQ_POST_LOGIN_FORM_FAIL,
  REQ_POST_LOGOUT_FORM_START,
  REQ_POST_LOGOUT_FORM_SUCCESS,
  REQ_POST_LOGOUT_FORM_FAIL
} from '../routes/Auth/modules/constants'

const ACTION_HANDLERS = {
  [REQ_POST_LOGIN_FORM_START]: (state, action) => { return { ...state, loginingFetching: true } },
  [REQ_POST_LOGIN_FORM_SUCCESS]: (state, action) => {
    return {
      ...state,
      loginingFetching: false,
      logoutingFetching: false,
      isLogin: true,
      userName: action.payload.userName,
      userEmail: action.payload.userEmail,
      userId: action.payload.userId
    }
  },
  [REQ_POST_LOGIN_FORM_FAIL]: (state, action) => { return { ...state, loginingFetching: false } },

  [REQ_POST_LOGOUT_FORM_START]: (state, action) => { return { ...state, logoutingFetching: true } },
  [REQ_POST_LOGOUT_FORM_SUCCESS]: (state, action) => {
    return {
      ...state,
      logoutingFetching: false,
      isLogin: false,
      userName: 'New User',
      userEmail: null,
      userId: null
    }
  },
  [REQ_POST_LOGOUT_FORM_FAIL]: (state, action) => { return { ...state, logoutingFetching: false } }
}

const initialState = {
  isLogin: false,
  loginingFetching: false,
  userName: 'New User',
  userEmail: null,
  userId: null
}
export default function appData (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
