import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import auth from './auth'
import brands from './brands'
import closet from './closet'
import catTemps from './catTemps'
import looks from './looks'
import categories from './categories'
import colors from './colors'

const reducer = combineReducers({ 
    auth,
    brands,
    closet,
    catTemps,
    looks,
    categories,
    colors
})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './brands'
export * from './closet'
export * from './catTemps'
export * from './looks'
export * from './categories'
export * from './colors'