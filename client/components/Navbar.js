import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className='header-top bg-grey justify-content-center'>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-lg-4 col-md-4 col-6'>
          <nav className='navbar navbar-expand-lg navigation-2 navigation'>
            {isLoggedIn ? (
              <div className='collapse navbar-collapse' id='navbar-collapse' style={{ flexGrow: 0 }}>
                <ul id='menu' className='menu navbar-nav mx-auto' style={{ textAlign: 'left'}}>
                  {/* <li className='nav-item'>
                    <Link to="/home">Home</Link>
                  </li> */}
                  <li className='nav-item'>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/mycloset">My Closet</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/looks">Saved Looks</Link>
                  </li>
                  <li className='nav-item'>
                    <a href="#" onClick={handleClick}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div className='collapse navbar-collapse' id='navbar-collapse' style={{flexGrow: 0}}>
                <ul id='menu' className='menu navbar-nav mx-auto'>
                  <li className='nav-item'>
                    <Link to="/login">Login</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
        <div className='col-lg-4 col-md-12 text-center d-none d-lg-block'>
          <Link to='/home' className='navbar-brand'>
            <h1>StyleMe</h1>
          </Link>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="header-socials-2 text-center d-none d-lg-block">
            <ul className="list-inline mb-0" style={{ textAlign: 'right'}}>
              <li className="list-inline-item"><a href="#"><img style={{ height: '1.1rem'}}src='images/social media/facebook.png'/></a></li>
              <li className="list-inline-item"><a href="#"><img style={{ height: '1.1rem'}}src='images/social media/instagram.png'/></a></li>
              <li className="list-inline-item"><a href="#"><img style={{ height: '1.1rem'}}src='images/social media/youtube.png'/></a></li>
              <li className="list-inline-item"><a href="#"><img style={{ height: '1.1rem'}}src='images/social media/linkedin.png'/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
