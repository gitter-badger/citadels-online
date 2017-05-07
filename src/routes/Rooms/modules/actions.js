import {
  REQ_GET_ROOMS_START,
  REQ_GET_ROOMS_SUCCESS,
  REQ_GET_ROOMS_FAIL
} from './constants'

export const loadRooms = () => {
  return (dispatch, getState) => {
    const testData = [
      {
        id: 1,
        name: 'Первая комната',
        url: '12345',
        users: 2,
        isFull: false
      },
      {
        id: 2,
        name: 'Вторая комната',
        url: '54323',
        users: 0,
        isFull: false
      },
      {
        id: 3,
        name: 'Третяя комната',
        url: '31231',
        users: 5,
        isFull: true
      }
    ]

    dispatch({
      type: REQ_GET_ROOMS_START
    })

    dispatch({
      type: REQ_GET_ROOMS_SUCCESS,
      payload: testData
    })

    // dispatch({
    //   type: REQ_GET_ROOMS_FAIL
    // })
  }
}

export const actions = {
  loadRooms
}
