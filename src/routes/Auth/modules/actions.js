import Cookies from 'js-cookie'

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
} from './constants'

import {
  URL
} from 'modules/constants'

import { serverRequest } from 'modules/helpers/'

const COOKIE_EXP_DAYS = 365

const setAuthCookies = data => {
  const { userName, userEmail, userId, sessionToken } = data

  Cookies.set('userName', userName, { expires: COOKIE_EXP_DAYS })
  Cookies.set('userEmail', userEmail, { expires: COOKIE_EXP_DAYS })
  Cookies.set('userId', userId, { expires: COOKIE_EXP_DAYS })
  Cookies.set('sessionToken', sessionToken, { expires: COOKIE_EXP_DAYS })
}

const removeAuthCookies = () => {
  Cookies.remove('userName', { expires: COOKIE_EXP_DAYS })
  Cookies.remove('userEmail', { expires: COOKIE_EXP_DAYS })
  Cookies.remove('userId', { expires: COOKIE_EXP_DAYS })
  Cookies.remove('sessionToken', { expires: COOKIE_EXP_DAYS })
}

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
        payload: res.result
      })

      setAuthCookies(res.result)
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

    removeAuthCookies()
    location.reload()

    // dispatch({
    //   type: REQ_POST_LOGOUT_FORM_FAIL
    // })
  }
}

export const checkUserAuth = () => {
  return (dispatch) => {
    const { userEmail, sessionToken } = Cookies.get()

    if (!userEmail) {
      return Promise.reject('User not login')
    }

    const checkData = {
      email: userEmail,
      sessionToken: sessionToken
    }

    dispatch({
      type: REQ_POST_CHECK_USER_AUTH_START
    })

    return serverRequest({
      url: URL.authCheck,
      method: 'POST',
      body: checkData
    })
    .then((res) => {
      dispatch({
        type: REQ_POST_CHECK_USER_AUTH_SUCCESS
      })
    })
    .catch((e) => {
      dispatch({
        type: REQ_POST_CHECK_USER_AUTH_FAIL
      })
      return Promise.reject('Hacker!')
    })
  }
}

export const actions = {
  logIn,
  logOut,
  checkUserAuth
}
