import React from 'react'
import {connect} from 'react-redux'
import {Link, useLocation} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => { 
  const location = useLocation();

  return ( 
  <div className='header-top bg-grey justify-content-center'>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-lg-5 col-md-5 col-6'>
          <nav className='navbar navbar-expand-lg navigation-2 navigation'>
            {isLoggedIn ? (
              <div className='collapse navbar-collapse' id='navbar-collapse' style={{ flexGrow: 0 }}>
                <ul id='menu' className='menu navbar-nav mx-auto' style={{ textAlign: 'left'}}>
                  <li className='nav-item'>
                    <Link to="/mycloset" id='nav' style={ location.pathname === '/mycloset' ? { fontWeight: 'bold', textDecoration: 'underline' } : {} }>My Closet</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/looks" id='nav' style={ location.pathname === '/looks' ? { fontWeight: 'bold', textDecoration: 'underline' } : {} }>Saved Outfits</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/weather" id='nav' style={ location.pathname === '/weather' ? { fontWeight: 'bold', textDecoration: 'underline' } : {} }>Weather</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/shop" id='nav' style={ location.pathname === '/shop' ? { fontWeight: 'bold', textDecoration: 'underline' } : {} }>Shop</Link>
                  </li>
                  <li className='nav-item'>
                    <a href="#" id='nav' onClick={handleClick}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div className='collapse navbar-collapse' id='navbar-collapse' style={{flexGrow: 0}}>
                <ul id='menu' className='menu navbar-nav mx-auto'>
                <li className='nav-item'>
                    <Link to="/login" id='nav' style={ location.pathname === '/login' ? { fontWeight: 'bold', textDecoration: 'underline' } : {} }>Login</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/signup" id='nav' style={ location.pathname === '/signup' ? { fontWeight: 'bold', textDecoration: 'underline' } : {} }>Sign Up</Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
        <div className='col-lg-2 col-md-2 text-center d-none d-lg-block'>
          <Link to='/home' className='navbar-brand'>
            <h1>StyleMe</h1>
          </Link>
        </div>
        <div className="col-lg-5 col-md-5 col-6">
          <div className="header-socials-2 text-center d-none d-lg-block">
            <ul className="list-inline mb-0" style={{ textAlign: 'right'}}>
              <li className="list-inline-item"><a href="#"><img style={{ height: '1.3rem'}}src='images/social media/facebook.png'/></a></li>
              <li className="list-inline-item"><a href="#"><img style={{ height: '1.3rem'}}src='images/social media/instagram.png'/></a></li>
              <li className="list-inline-item"><a href="#"><img style={{ height: '1.3rem'}}src='images/social media/youtube.png'/></a></li>
              <li className="list-inline-item"><a href="#"><img style={{ height: '1.3rem'}}src='images/social media/linkedin.png'/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

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
