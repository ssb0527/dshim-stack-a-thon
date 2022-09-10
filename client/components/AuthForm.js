import React from 'react'
import {connect} from 'react-redux'
import {authenticate} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className='container'>
      <div className='container' style={{ width: '40%', marginTop: 130 }}>
        <h3>{ displayName }</h3>
          <div className='d-flex justify-content-center' >
            <div style={{ width: '70%' }}>
            <form onSubmit={handleSubmit} name={name}>
              <div className='mt-4'>
                <label htmlFor="username">
                  <p>Username</p>
                </label>
                <br />
                <input name="username" type="text" style={{ width: '80%', display: 'block', margin: '10px auto' }} />
              </div>
              <div className='mt-4'>
                <label htmlFor="password">
                  <p>Password</p>
                </label>
                <br />
                <input name="password" type="password" style={{ width: '80%', display: 'block', margin: '10px auto' }} />
              </div>
              <div className='mt-5'>
                <button 
                  type="submit" 
                  className='btn btn-primary btn-md solid blank mt-4'
                  style={{ display: 'block', margin: '0 auto', fontSize: '1rem' }}
                >{displayName}</button>
              </div>
              {error && error.response && <div> {error.response.data} </div>}
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      dispatch(authenticate(username, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
