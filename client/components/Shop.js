import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
const Shop = props => {
  const { brands } = props;

  return (
    <div>
      <h3>This is Shop</h3>
      <ul style={{ display: 'flex' }}>
        {
            brands.map(brand => {
                const { id, image, link, name } = brand
                return (
                    <li key={ id }>
                        <a href={ link } target='_blank'>
                            <img src={ `data:image/png;base64,${image}` } alt={ name } style={{ height: 200, width: 200 }} />
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
