import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
const Looks = ({ looks }) => {
  return (
    <div>
      <h2>Saved Looks</h2>
      <ul style={{ display: 'flex' }}>
        {
            looks.map(look => {
                const { id, outerwearImage, topImage, bottomImage, shoeImage, date, temperature, note } = look
                return (
                    <li key={ id }>
                        <h3>Look { id }</h3>
                        <img src={ `data:image/png;base64,${topImage}` } style={{ height: 100 }} />
                        <img src={ `data:image/png;base64,${outerwearImage}` } style={{ height: 100 }} />
                        <br />
                        <img src={ `data:image/png;base64,${bottomImage}` } style={{ height: 100 }} />
                        <br />
                        <img src={ `data:image/png;base64,${shoeImage}` } style={{ height: 100 }} />
                        <br />
                        <p>Date: { date }</p>
                        <p>Temperature: { temperature }</p>
                        <p>Note: { note }</p>
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return state
}

export default connect(mapState)(Looks)
