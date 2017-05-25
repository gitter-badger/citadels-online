import Cookies from 'js-cookie'
import { serverRequest } from 'modules/helpers/'

/*
  Constants
*/
import {
  REQ_POST_LOGIN_FORM_START,
  REQ_POST_LOGIN_FORM_SUCCESS,
  REQ_POST_LOGIN_FORM_FAIL,
  REQ_POST_LOGOUT_FORM_START,
  REQ_POST_LOGOUT_FORM_SUCCESS,
  REQ_POST_LOGOUT_FORM_FAIL,
  REQ_POST_CHECK_USER_AUTH_START,
  REQ_POST_CHECK_USER_AUTH_SUCCESS,
  REQ_POST_CHECK_USER_AUTH_FAIL
} from '../routes/Auth/modules/constants'

import {
  URL
} from 'modules/constants'

const SET_USER_DATA_FROM_COOKIE = 'SET_USER_DATA_FROM_COOKIE'

/*
  Actions
*/
export const setUserDataFromCookie = (userData) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER_DATA_FROM_COOKIE,
      payload: userData
    })
  }
}

/*
  Action handlers
*/
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
  [REQ_POST_LOGOUT_FORM_FAIL]: (state, action) => { return { ...state, logoutingFetching: false } },

  [SET_USER_DATA_FROM_COOKIE]: (state, action) => {
    return {
      ...state,
      isLogin: true,
      userName: action.payload.userName,
      userEmail: action.payload.userEmail,
      userId: action.payload.userId,
      sessionToken: action.payload.sessionToken
    }
  },

  [REQ_POST_CHECK_USER_AUTH_START]: (state, action) => { return { ...state, checkUserAuthFetching: true } },
  [REQ_POST_CHECK_USER_AUTH_SUCCESS]: (state, action) => {
    return {
      ...state,
      checkUserAuthFetching: false,
      isLogin: true
    }
  },
  [REQ_POST_CHECK_USER_AUTH_FAIL]: (state, action) => { return { ...state, checkUserAuthFetching: false } }
}

const initialState = {
  isLogin: false,
  loginingFetching: false,
  userName: 'New User',
  userEmail: null,
  userId: null,
  sessionToken: null
}
export default function appData (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
