import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import auth from './auth'
import brands from './brands'
import closet from './closet'
import colors from './colors'
import categories from './categories'
import temperatures from './temperatures'
import catTemps from './catTemps'

const reducer = combineReducers({ 
    auth,
    brands,
    closet,
    colors,
    categories,
    temperatures,
    catTemps
})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './brands'
export * from './closet'
export * from './colors'
export * from './categories'
export * from './temperatures'
export * from './catTemps'