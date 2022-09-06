import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
const Shop = ({ brands }) => {
  return (
    <div>
      <h3>Shop</h3>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
            brands.map(brand => {
                const { id, image, link, name } = brand
                return (
                    <li key={ id }>
                        <a href={ link } target='_blank'>
                            <img src={ `data:image/png;base64,${image}` } alt={ name } style={{ height: 175, width: 175, borderRadius: 20 }} />
                        </a>
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

export default connect(mapState)(Shop)
