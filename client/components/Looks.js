import React from 'react'
import {connect} from 'react-redux'
import { deleteLook } from '../store';

/**
 * COMPONENT
 */
const Looks = ({ looks, deleteLook }) => {
  return (
    <div className='container'>
      <h2>Saved Outfits</h2>
      <ul className='ul-look'>
        {
            looks.map(look => {
                const { id, hatImage, scarfImage, outerwearImage, topImage, bottomImage, shoeImage, bagImage, sockImage, date, note } = look
                return (
                    <li className='look' key={ id } style={{ margin: '15px 45px', width: '200px' }}>
                        <div className='d-flex justify-content-between'>
                          <h3>Outfit { id }</h3>
                          <button className='btn btn-outline btn-sm mb-2' style={{ color: 'grey' }} onClick={ () => deleteLook(look) }>x</button>
                        </div>
                        <div className='ootdParentContainer'>
                          <div className='ootdChildContainer-1 inner-look'>
                            <img src={ hatImage && `data:image/png;base64,${ hatImage }` } style={{ height: 30, marginBottom: 10 }} />
                            <img src={ topImage && `data:image/png;base64,${ topImage }` } style={{ height: 100, marginBottom: 5 }} />
                            <img src={ bottomImage && `data:image/png;base64,${ bottomImage }` } style={{ height: 100 }} />
                            <img src={ shoeImage && `data:image/png;base64,${ shoeImage }` } style={{ height: 70 }} />
                          </div>
                          <div className='ootdChildContainer-2 inner-look'>
                            <img src={ outerwearImage && `data:image/png;base64,${ outerwearImage }` } style={{ height: 100, marginBottom: 5 }} />
                            <img src={ bagImage && `data:image/png;base64,${ bagImage }` } style={{ height: 100 }} />
                            <img src={ sockImage && `data:image/png;base64,${ sockImage }` } style={{ height: 60, marginTop: 10 }} />
                          </div>
                          <div className='ootdChildContainer-2 inner-look'>
                            <img src={ scarfImage && `data:image/png;base64,${ scarfImage }` } style={{ height: 100 }} />
                          </div>
                        </div>
                        <p>Date: { date }</p>
                        <p>Note: { !note ? 'n/a' : note }</p>
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
