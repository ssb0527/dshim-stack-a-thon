import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_BRANDS = 'SET_BRANDS'

/**
 * ACTION CREATORS
 */
const setBrands = brands => ({type: SET_BRANDS, brands})

/**
 * THUNK CREATORS
 */
export const fetchBrands = () => async dispatch => {
    const res = await axios.get('/api/brands')
    return dispatch(setBrands(res.data))
}


/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case SET_BRANDS:
      return action.brands
    default:
      return state
  }
}
