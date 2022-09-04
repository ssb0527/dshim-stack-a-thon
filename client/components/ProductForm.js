import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addItemToCloset } from '../store';
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
class ProductForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            image: '',
            brandId: 0,
            categoryId: 0,
            colorId: 0
        };
        this.save = this.save.bind(this);
    }
    componentDidMount() {
        this.el.addEventListener('change', ev => {
            const file = ev.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                this.setState({ image: reader.result.slice(22) });
            })
            reader.readAsDataURL(file);
        })
    }
    save(ev) {
        ev.preventDefault();
        const product = {
            name: this.state.name,
            image: this.state.image,
            brandId: this.state.brandId * 1,
            categoryId: this.state.categoryId * 1,
            colorId: this.state.colorId * 1
        };
        this.props.addItemToCloset(product);
    }
    render() {
        const { name, image, brandId, categoryId, colorId } = this.state;
        const { brands, categories, colors } = this.props;
        const { save } = this;
        return (
            <div>
            <Link to='/mycloset'>Return to Closet</Link>
            <h3>Add New Item to My Closet</h3>
            <form onSubmit={ save }>
                <p>Item Image</p>
                <img src={ image && `data:image/png;base64,${ image }` } style={{ height: 200 }} />
                <br />
                <input type='file' ref={ el => this.el = el }/><br />
                <p>Item Name</p>
                <input value={ name } onChange={ ev => this.setState({ name: ev.target.value })} />
                <p>Brand</p>
                <select value={ brandId } onChange={ ev => this.setState({ brandId: ev.target.value })}>
                    <option value=''>-- Select Brand --</option>
                        {
                            brands.map( brand => {
                                return (
                                    <option key={ brand.id } value={ brand.id }>{ brand.name }</option>
                                )
                            })
                        }
                </select>
                <p>Category</p>
                <select value={ categoryId } onChange={ ev => this.setState({ categoryId: ev.target.value })}>
                    <option value=''>-- Select Category --</option>
                        {
                            categories.map( category => {
                                return (
                                    <option key={ category.id } value={ category.id }>{ category.name }</option>
                                )
                            })
                        }
                </select>
                <p>Color</p>
                <select value={ colorId } onChange={ ev => this.setState({ colorId: ev.target.value })}>
                    <option value=''>-- Select Category --</option>
                        {
                            colors.map( color => {
                                return (
                                    <option key={ color.id } value={ color.id }>{ color.name }</option>
                                )
                            })
                        }
                </select>
                <br />
                <button disabled={ !image || !name || !brandId || !categoryId || !colorId }>Add</button>
            </form>
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

const mapDispatch = (dispatch, { history }) => {
    return {
      addItemToCloset(product) {
        dispatch(addItemToCloset(product, history))
      }
    }
  }

export default connect(mapState, mapDispatch)(ProductForm)
