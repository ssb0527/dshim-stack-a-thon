import React from 'react'
import {connect} from 'react-redux'
import { deleteLook } from '../store';

/**
 * COMPONENT
 */
const Looks = ({ looks, deleteLook }) => {
  return (
    <div>
      <h2>Saved Looks</h2>
      <ul style={{ display: 'flex' }}>
        {
            looks.map(look => {
                const { id, outerwearImage, topImage, bottomImage, shoeImage, date, note } = look
                return (
                    <li key={ id }>
                        <h3>Look { id }</h3>
                        <img src={ topImage && `data:image/png;base64,${ topImage }` } style={{ height: 100 }} />
                        <img src={ outerwearImage && `data:image/png;base64,${ outerwearImage }` } style={{ height: 100 }} />
                        <br />
                        <img src={ bottomImage && `data:image/png;base64,${ bottomImage }` } style={{ height: 100 }} />
                        <br />
                        <img src={ shoeImage && `data:image/png;base64,${ shoeImage }` } style={{ height: 100 }} />
                        <br />
                        <p>Date: { date }</p>
                        <p>Note: { !note ? 'n/a' : note }</p>
                        <button onClick={ () => deleteLook(look) }>Remove</button>
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

const mapDispatch = dispatch => {
  return {
    deleteLook(look) {
      dispatch(deleteLook(look))
    }
  }
}

export default connect(mapState, mapDispatch)(Looks)
