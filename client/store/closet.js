import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CLOSET = 'SET_CLOSET'

/**
 * ACTION CREATORS
 */
const setCloset = closet => ({type: SET_CLOSET, closet})

/**
 * THUNK CREATORS
 */
export const fetchCloset = () => async dispatch => {
    const res = await axios.get('/api/closets', {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    return dispatch(setCloset(res.data))
}

export const addItemToCloset = (product, history) => async dispatch => {
  const res = await axios.put('/api/closets', product, {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  })
  dispatch(setCloset(res.data))
  history.push('/mycloset')
  return
}

export const editItem = (product) => async dispatch => {
  const res = await axios.put('/api/closets', product, {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  })
  dispatch(setCloset(res.data))
  return
}


/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case SET_CLOSET:
      return action.closet
    default:
      return state
  }
}
