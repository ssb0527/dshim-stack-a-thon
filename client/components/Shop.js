import React, { Component } from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
class Shop extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
    }
  }
  render() {
    const { brands } = this.props;
    const { term } = this.state;

    const directory = brands
    .filter(brand => brand.name.toLowerCase().includes(term.toLowerCase()))
    .reduce((acc, brand) => {
      const firstLetter = brand.name[0].toUpperCase();
      return {
        ...acc,
        [firstLetter]: [...(acc[firstLetter] || []), brand]
      }
    }, {})
    const alphabets = Object.keys(directory)
  
    return (
      <div className='container'>
        <h2>Shop</h2>
        <div style={{ width: '70%', margin: '0 auto' }}>
          <input style={{ fontSize: '16px'}} className='brand-search' placeholder='Search for Brand' onChange={ ev => this.setState({ term: ev.target.value })} />
        </div>
        <ul className='brand-list'>
          {
            alphabets.map(alphabet => {
              const brands = directory[alphabet]
              return (
                <div key={ alphabet }>
                    <p>{ alphabet }</p>
                    <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none' }}>
                      {
                          brands.map(brand => {
                              const { id, image, link, name } = brand
                              return (
                                  <li key={ id } style={{ margin: '10px 25px'}}>
                                      <a href={ link } target='_blank'>
                                          <img src={ `data:image/png;base64,${image}` } alt={ name } style={{ height: 150, width: 150, borderRadius: 10 }} />
                                      </a>
                                  </li>
                              )
                          })
                      }
                    </ul>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return state
}

export default connect(mapState)(Shop)
