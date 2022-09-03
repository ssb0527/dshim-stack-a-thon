import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_PRODUCTS = 'SET_PRODUCTS'

/**
 * ACTION CREATORS
 */
const setProducts = products => ({type: SET_PRODUCTS, products})

/**
 * THUNK CREATORS
 */
export const fetchProducts = () => async dispatch => {
    const res = await axios.get('/api/products')
    return dispatch(setProducts(res.data))
}


/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
