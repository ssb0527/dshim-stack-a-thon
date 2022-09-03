import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_COLORS = 'SET_COLORS'

/**
 * ACTION CREATORS
 */
const setColors = colors => ({type: SET_COLORS, colors})

/**
 * THUNK CREATORS
 */
export const fetchColors = () => async dispatch => {
    const res = await axios.get('/api/colors')
    return dispatch(setColors(res.data))
}


/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case SET_COLORS:
      return action.colors
    default:
      return state
  }
}
