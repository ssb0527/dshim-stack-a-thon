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
                const { id, hatImage, scarfImage, outerwearImage, topImage, bottomImage, shoeImage, bagImage, sockImage, date, note } = look
                return (
                    <li key={ id }>
                        <h3>Look { id }</h3>
                        <div className='ootdParentContainer'>
                          <div className='ootdChildContainer-1'>
                            <img src={ hatImage && `data:image/png;base64,${ hatImage }` } style={{ height: 30, marginBottom: 10 }} />
                            <img src={ topImage && `data:image/png;base64,${ topImage }` } style={{ height: 100 }} />
                            <img src={ bottomImage && `data:image/png;base64,${ bottomImage }` } style={{ height: 100 }} />
                            <img src={ shoeImage && `data:image/png;base64,${ shoeImage }` } style={{ height: 70 }} />
                          </div>
                          <div className='ootdChildContainer-2'>
                            <img src={ outerwearImage && `data:image/png;base64,${ outerwearImage }` } style={{ height: 100 }} />
                            <img src={ bagImage && `data:image/png;base64,${ bagImage }` } style={{ height: 100 }} />
                            <img src={ sockImage && `data:image/png;base64,${ sockImage }` } style={{ height: 60, marginTop: 10 }} />
                          </div>
                          <div className='ootdChildContainer-2'>
                            <img src={ scarfImage && `data:image/png;base64,${ scarfImage }` } style={{ height: 100 }} />
                          </div>
                        </div>
                        <p>Date: { date }</p>
                        <p>Note: { !note ? 'n/a' : note }</p>
                        <br/>
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
