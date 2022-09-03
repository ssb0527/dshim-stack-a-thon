import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_TEMPERATURES = 'SET_TEMPERATURES'

/**
 * ACTION CREATORS
 */
const setTemperatures = temperatures => ({type: SET_TEMPERATURES, temperatures})

/**
 * THUNK CREATORS
 */
export const fetchTemperatures = () => async dispatch => {
    const res = await axios.get('/api/temperatures')
    return dispatch(setTemperatures(res.data))
}


/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case SET_TEMPERATURES:
      return action.temperatures
    default:
      return state
  }
}
