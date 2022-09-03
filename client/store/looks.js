import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_LOOKS = 'SET_LOOKS'

/**
 * ACTION CREATORS
 */
const setLooks = looks => ({type: SET_LOOKS, looks})

/**
 * THUNK CREATORS
 */
export const fetchLooks = () => async dispatch => {
    const res = await axios.get('/api/looks', {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    return dispatch(setLooks(res.data))
}


/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case SET_LOOKS:
      return action.looks
    default:
      return state
  }
}
