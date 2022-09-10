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
      {/* <div style={{ margin: '4.5rem 5rem 0 5rem'}}><h1>This is your <span style={{ fontSize: '4rem' }}>Virtual Closet</span></h1></div> 
      <div style={{ margin: '0 5rem 0 7rem'}}><h1>where you can see all your clothes in <span style={{ fontSize: '4rem' }}>One Place</span></h1></div>
      <div style={{ margin: '0 5rem 0 9rem'}}><h1>and <span style={{ fontSize: '4rem' }}>Plan</span> your outfits ahead of time based on weather forecast.</h1></div> */}
      <img className='home-page-image' alt='Home Page Closet Image' src="https://imageio.forbes.com/specials-images/imageserve/5ed0518148936100073c0085/The-Container-Store-Avera-closet-system/960x0.jpg?format=jpg&width=960" />
      <div style={{ width: '80%', margin: '2rem auto' }}><h1>You currently have...</h1></div>
      <div style={{ textAlign: 'center' }}><h1><span style={{ fontSize: '6rem' }}>{ products.length }</span> items in your closet and <span style={{ fontSize: '6rem' }}>{ looks.length }</span> saved outfits!</h1></div>
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
