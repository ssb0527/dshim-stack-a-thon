import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username, products, looks} = props

  return (
    <div className='container'>
      <h1>Welcome { username[0].toUpperCase() + username.slice(1)},</h1>
      <div style={{ margin: '4.5rem 5rem 0 5rem'}}><h1>This is your <span style={{ fontSize: '4rem' }}>Virtual Closet</span></h1></div> 
      <div style={{ margin: '0 5rem 0 7rem'}}><h1>where you can see all your clothes in <span style={{ fontSize: '4rem' }}>One Place</span></h1></div>
      <div style={{ margin: '0 5rem 0 9rem'}}><h1>and <span style={{ fontSize: '4rem' }}>Plan</span> your outfits ahead of time based on weather forecast.</h1></div>
      <div style={{ margin: '5rem 0 0 13rem'}}><h1>You currently have...</h1></div>
      <div style={{ margin: '3rem 0 0 18rem'}}><h1><span style={{ fontSize: '10rem' }}>{ products.length }</span> items in your closet and <span style={{ fontSize: '10rem' }}>{ looks.length }</span> saved outfits!</h1></div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username,
    products: state.closet.products,
    looks: state.looks
  }
}

export default connect(mapState)(Home)
