import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CATTEMPS = 'SET_CATTEMPS'

/**
 * ACTION CREATORS
 */
const setCatTemps = catTemps => ({type: SET_CATTEMPS, catTemps})

/**
 * THUNK CREATORS
 */
export const fetchCatTemps = () => async dispatch => {
    const res = await axios.get('/api/catTemps')
    return dispatch(setCatTemps(res.data))
}


/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case SET_CATTEMPS:
      return action.catTemps
    default:
      return state
  }
}
