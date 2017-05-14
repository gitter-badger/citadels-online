import {
  REQ_POST_LOGIN_FORM_START,
  REQ_POST_LOGIN_FORM_SUCCESS,
  REQ_POST_LOGIN_FORM_FAIL,
  REQ_POST_LOGOUT_FORM_START,
  REQ_POST_LOGOUT_FORM_SUCCESS,
  REQ_POST_LOGOUT_FORM_FAIL
} from './constants'

import {
  URL
} from 'modules/constants'

import { serverRequest } from 'modules/helpers/'

export const logIn = (formData) => {
  return (dispatch, getState) => {
    dispatch({
      type: REQ_POST_LOGIN_FORM_START
    })

    serverRequest({
      url: URL.login,
      method: 'POST',
      body: formData
    }).then((res) => {
      dispatch({
        type: REQ_POST_LOGIN_FORM_SUCCESS,
        payload: res
      })
    }).catch(() => {
      dispatch({
        type: REQ_POST_LOGIN_FORM_FAIL
      })
    })
  }
}
export const logOut = (formData) => {
  return (dispatch, getState) => {
    dispatch({
      type: REQ_POST_LOGOUT_FORM_START
    })

    dispatch({
      type: REQ_POST_LOGOUT_FORM_SUCCESS
    })

    // dispatch({
    //   type: REQ_POST_LOGOUT_FORM_FAIL
    // })
  }
}

export const actions = {
  logIn,
  logOut
}
