import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { createLook, editItem } from '../store';

/**
 * COMPONENT
 */
class Products extends Component {
  constructor() {
    super();
    this.state = {
      Hats: '',
      Scarves: '',
      Outerwear: '',
      Tops: '',
      Bottoms: '',
      Shoes: '',
      Bags: '',
      Socks: '',
      date: '',
      note: ''
    }
    this.save = this.save.bind(this);
  }
  save(ev) {
    ev.preventDefault();
    const look = {
      hatImage: this.state.Hats,
      scarfImage: this.state.Scarves,
      outerwearImage: this.state.Outerwear,
      topImage: this.state.Tops,
      bottomImage: this.state.Bottoms,
      shoeImage: this.state.Shoes,
      bagImage: this.state.Bags,
      sockImage: this.state.Socks,
      date: this.state.date,
      note: this.state.note
    }
    this.props.createLook(look);
  }
  render() {
    const { closet: { products }, catTemps, match, deleteItem } = this.props;
    const { Hats, Outerwear, Tops, Bottoms, Shoes, Bags, Socks, Scarves, date, note } = this.state;
    const { save } = this;
    
    const filter = match.params.filter ? JSON.parse(match.params.filter) : {};

    // Color Map
    const colorMap = products
      .filter(product => !filter.categoryId || filter.categoryId === product.categoryId)
      .filter(product => !filter.colorId || filter.colorId === product.colorId)
      .filter(product => !filter.brandId || filter.brandId === product.brandId)
      .filter(product => {
        const categoryArray = catTemps
          .filter(catTemp => catTemp.temperatureId === filter.temperatureId)
          .reduce((acc, catTemp) => [...acc, catTemp.categoryId], [])
        return !filter.temperatureId || categoryArray.includes(product.categoryId)
      })
      .reduce((acc, product) => {
        const id = product.colorId;
        acc[id] = acc[id] || { id, count: 0, name: product.color.name };
        acc[id].count++;
        return acc;
      }, {})
    const colorEntries = Object.values(colorMap)

    // Category Map
    const categoryMap = products
      .filter(product => !filter.colorId || filter.colorId === product.colorId)
      .filter(product => !filter.categoryId || filter.categoryId === product.categoryId)
      .filter(product => !filter.brandId || filter.brandId === product.brandId)
      .filter(product => {
        const categoryArray = catTemps
          .filter(catTemp => catTemp.temperatureId === filter.temperatureId)
          .reduce((acc, catTemp) => [...acc, catTemp.categoryId], [])
        return !filter.temperatureId || categoryArray.includes(product.categoryId)
      })
      .reduce((acc, product) => {
        const id = product.categoryId;
        acc[id] = acc[id] || { id, count: 0, name: product.category.name };
        acc[id].count++;
        return acc;
      }, {})
    const categoryEntries = Object.values(categoryMap)

    // Temperature Map
    const temperatureList = categoryEntries.map(entry => {
      const temperatureObj = catTemps
        .filter(catTemp => catTemp.category.name === entry.name)
        .reduce((acc, catTemp) => {
            const id = catTemp.temperatureId;
            acc[id] = acc[id] || { id, range: catTemp.temperature.range };
            return acc;
          }, {})
      return Object.values(temperatureObj)
    })
    const temperatureMap = temperatureList.flat().reduce((acc, temperature) => {
      const id = temperature.id;
      acc[id] = acc[id] || { id, count: 0, range: temperature.range };
      acc[id].count++;
      return acc;
    }, {})
    const temperatureEntries = Object.values(temperatureMap)

    // Brand Map
    const brandMap = products
    .filter(product => !filter.categoryId || filter.categoryId === product.categoryId)
    .filter(product => !filter.colorId || filter.colorId === product.colorId)
    .filter(product => !filter.brandId || filter.brandId === product.brandId)
    .filter(product => {
      const categoryArray = catTemps
        .filter(catTemp => catTemp.temperatureId === filter.temperatureId)
        .reduce((acc, catTemp) => [...acc, catTemp.categoryId], [])
      return !filter.temperatureId || categoryArray.includes(product.categoryId)
    })
    .reduce((acc, product) => {
      const id = product.brandId;
      acc[id] = acc[id] || { id, count: 0, name: product.brand.name };
      acc[id].count++;
      return acc;
    }, {})
    const brandEntries = Object.values(brandMap)

    // Filtered Products
    const filtered = products
      .filter(product => !filter.colorId || filter.colorId === product.colorId)
      .filter(product => !filter.categoryId || filter.categoryId === product.categoryId)
      .filter(product => !filter.brandId || filter.brandId === product.brandId)
      .filter(product => {
        const categoryArray = catTemps
          .filter(catTemp => catTemp.temperatureId === filter.temperatureId)
          .reduce((acc, catTemp) => [...acc, catTemp.categoryId], [])
        return !filter.temperatureId || categoryArray.includes(product.categoryId)
      })

    const familyMap = filtered.reduce((acc, product) => {
      const id = product.category.familyId;
      acc[id] = acc[id] || { id, name: product.category.family.name };
      return acc;
    }, {})
    const familyEntries = Object.values(familyMap)

    return (
      <div className='myCloset container'>
        {/* Facet Search */}
        <div className='search'>
            <h4>Temperature</h4>
            <ul className='search-list' style={{ listStyleType: 'none'}}>
              {
                temperatureEntries.map(entry => {
                  const _filter = { ...filter, temperatureId: entry.id };
                  if (_filter.temperatureId === filter.temperatureId) {
                    delete _filter.temperatureId;
                  }
                  const url = `/mycloset/${JSON.stringify(_filter)}`
                  return (
                    <li key={ entry.id } className={ filter.temperatureId === entry.id ? 'selected' : ''}>
                      <Link to={ url }>
                        { entry.range }
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
            <h4>Category</h4>
            <ul className='search-list' style={{ listStyleType: 'none'}}>
              {
                categoryEntries.map(entry => {
                  const _filter = { ...filter, categoryId: entry.id };
                  if(_filter.categoryId === filter.categoryId) {
                    delete _filter.categoryId;
                  }
                  const url = `/mycloset/${JSON.stringify(_filter)}`
                  return (
                    <li key={ entry.id } className={ filter.categoryId === entry.id ? 'selected' : ''}>
                      <Link to={ url }>
                        { entry.name } ({ entry.count })
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
            <h4>Color</h4>
            <ul className='search-list' style={{ listStyleType: 'none'}}>
              {
                colorEntries.map(entry => {
                  const _filter = { ...filter, colorId: entry.id };
                  if(_filter.colorId === filter.colorId) {
                    delete _filter.colorId;
                  }
                  const url = `/mycloset/${JSON.stringify(_filter)}`
                  return (
                    <li key={ entry.id } className={ filter.colorId === entry.id ? 'selected' : ''}>
                      <Link to={ url }>
                        { entry.name } ({ entry.count })
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
            <h4>Brand</h4>
            <ul className='search-list' style={{ listStyleType: 'none'}}>
              {
                brandEntries.map(entry => {
                  const _filter = { ...filter, brandId: entry.id };
                  if(_filter.brandId === filter.brandId) {
                    delete _filter.brandId;
                  }
                  const url = `/mycloset/${JSON.stringify(_filter)}`
                  return (
                    <li key={ entry.id } className={ filter.brandId === entry.id ? 'selected' : '' }>
                      <Link to={ url }>
                        { entry.name } ({ entry.count })
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
        </div>
        {/* Closet */}
        <div className='closet'>
          <div className='closetHeader'>
            <h2>My Closet</h2>
            <Link to='/addNewItem' className='btn btn-primary btn-sm solid blank' style={{ marginRight: 50 }}>Add New Item</Link>
          </div>
          <ul style={{ listStyleType: 'none'}}>
            {
              familyEntries.map(family => {
                const familyProducts = filtered.filter(product => product.category.familyId === family.id);
                return (
                  <li key={ family.id } style={{ margin: '10px 25px' }}>
                    <h3>{ family.name }</h3>
                    <ul className='closetList' style={{ listStyleType: 'none'}}>
                      {
                        familyProducts.map(product => {
                          return (
                            <li key={ product.id } style={{ margin: '10px 25px'}}>
                              <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                                <img 
                                  src={ `data:image/png;base64,${ product.image }` } 
                                  alt={ product.name } 
                                  style={ product.category.family.name === 'Hats' ? { height: 70 } : { height: 150 } } 
                                  onClick={ () => this.setState({ [ family.name ]: product.image}) }
                                />
                              </div>
                              <div style={{ textAlign: 'center', fontSize: '0.9rem' }}>
                                <Link to={`/itemdetail/${product.id}`} id='details'>Details</Link>
                              </div>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </li>
                )
              })
            }
          </ul>
        </div>
        {/* OOTD */}
        <div className='search'></div>
        <div className='ootd-bar'>
          <h4>Outfit of the Day</h4>
          <form onSubmit={ save }>
            <div className='ootdParentContainer'>
              <div className='ootdChildContainer-1'>
                <img src={ Hats && `data:image/png;base64,${ Hats }` } onClick={ () => this.setState({ Hats: '' })} style={{ height: 30, marginBottom: 10 }} />
                <img src={ Tops && `data:image/png;base64,${ Tops }` } onClick={ () => this.setState({ Tops: '' })} style={{ height: 100, marginBottom: 5 }} />
                <img src={ Bottoms && `data:image/png;base64,${ Bottoms }` } onClick={ () => this.setState({ Bottoms: '' })} style={{ height: 100 }} />
                <img src={ Shoes && `data:image/png;base64,${ Shoes }` } onClick={ () => this.setState({ Shoes: '' })} style={{ height: 70 }} />
              </div>
              <div className='ootdChildContainer-2'>
                <img src={ Outerwear && `data:image/png;base64,${ Outerwear }` } onClick={ () => this.setState({ Outerwear: '' })} style={{ height: 100, marginBottom: 5 }} />
                <img src={ Bags && `data:image/png;base64,${ Bags }` } onClick={ () => this.setState({ Bags: '' })} style={{ height: 100 }} />
                <img src={ Socks && `data:image/png;base64,${ Socks }` } onClick={ () => this.setState({ Socks: '' })} style={{ height: 60, marginTop: 10 }} />
              </div>
              <div className='ootdChildContainer-2'>
                <img src={ Scarves && `data:image/png;base64,${ Scarves }` } onClick={ () => this.setState({ Scarves: '' })} style={{ height: 100 }} />
              </div>
            </div>
            <p>Date</p>
            <input type='date' value={ date } onChange={ ev => this.setState({ date: ev.target.value })} />
            <br />
            <p>Note</p>
            <textarea placeholder='Special occasion?' value={ note } onChange={ ev => this.setState({ note: ev.target.value })}/>
            <br/>
            <div>
              <button 
                className='btn btn-primary btn-sm solid blank' 
                id='savelook-button'
                disabled={ !date }
              >Save</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state, otherProps) => {
  const { match } = otherProps
  return {
    ...state,
    match
  }
}

const mapDispatch = dispatch => {
  return {
    createLook(look) {
      dispatch(createLook(look))
    }
  }
}

export default connect(mapState, mapDispatch)(Products)
