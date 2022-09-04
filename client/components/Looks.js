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
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
            looks.map(look => {
                const { id, hatImage, outerwearImage, topImage, bottomImage, shoeImage, bagImage, sockImage, date, note } = look
                return (
                    <li key={ id }>
                        <h3>Look { id }</h3>
                        <img src={ hatImage && `data:image/png;base64,${ hatImage }` } style={{ height: 30 }} />
                        <br />
                        <img src={ topImage && `data:image/png;base64,${ topImage }` } style={{ height: 100 }} />
                        <img src={ outerwearImage && `data:image/png;base64,${ outerwearImage }` } style={{ height: 100 }} />
                        <br />
                        <img src={ bottomImage && `data:image/png;base64,${ bottomImage }` } style={{ height: 100 }} />
                        <img src={ bagImage && `data:image/png;base64,${ bagImage }` } style={{ height: 100 }} />
                        <br />
                        <img src={ shoeImage && `data:image/png;base64,${ shoeImage }` } style={{ height: 50 }} />
                        <img src={ sockImage && `data:image/png;base64,${ sockImage }` } style={{ height: 50 }} />
                        <br />
                        <p>Date: { date }</p>
                        <p>Note: { !note ? 'n/a' : note }</p>
                        <button onClick={ () => deleteLook(look) }>delete</button>
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
