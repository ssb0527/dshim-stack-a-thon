import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_LOOKS = 'SET_LOOKS'
const CREATE_LOOK = 'CREATE_LOOK'
const DELETE_LOOK = 'DELETE_LOOK'

/**
 * ACTION CREATORS
 */
const setLooks = looks => ({type: SET_LOOKS, looks})
const saveLook = look => ({type: CREATE_LOOK, look})
const destroyLook = look => ({type: DELETE_LOOK, look})

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

export const createLook = (look) => async dispatch => {
  const res = await axios.post('/api/looks', look, {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  })
  return dispatch(saveLook(res.data))
}

export const deleteLook = (look) => async dispatch => {
  await axios.delete(`/api/looks/${ look.id }`, {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  })
  return dispatch(destroyLook(look))
}


/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case SET_LOOKS:
      return action.looks
    case CREATE_LOOK:
      return [...state, action.look]
    case DELETE_LOOK:
      return state.filter(look => look.id !== action.look.id)
    default:
      return state
  }
}
