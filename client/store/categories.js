import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CATEGORIES = 'SET_CATEGORIES'

/**
 * ACTION CREATORS
 */
const setCategories = categories => ({type: SET_CATEGORIES, categories})

/**
 * THUNK CREATORS
 */
export const fetchCategories = () => async dispatch => {
    const res = await axios.get('/api/categories')
    return dispatch(setCategories(res.data))
}


/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
