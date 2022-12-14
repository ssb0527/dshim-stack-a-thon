import React, { Component } from 'react'
import {connect} from 'react-redux'
import { deleteItem, editItem } from '../store';
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
class ProductEdit extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            image: '',
            brandId: '',
            categoryId: '',
            colorId: ''
        };
        this.save = this.save.bind(this);
    }
    componentDidMount() {
        this.setState({
            name: this.props.product.name,
            image: this.props.product.image,
            brandId: this.props.product.brandId,
            categoryId: this.props.product.categoryId,
            colorId: this.props.product.colorId
        })
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
            id: this.props.product.id,
            name: this.state.name,
            image: this.state.image,
            brandId: this.state.brandId * 1,
            categoryId: this.state.categoryId * 1,
            colorId: this.state.colorId * 1
        };
        this.props.editItem(product);
    }
    render() {
        const { name, image, brandId, categoryId, colorId } = this.state;
        const { brands, categories, colors, product, deleteItem } = this.props;
        const { save } = this;
        return (
            <div className='container'>
                <Link style ={{ marginLeft: 100 }} to='/mycloset'>Return to Closet</Link>
                <div className='container' style={{ width: '60%'}}>
                <div className='closetHeader'>
                    <h3>Item Details</h3>
                </div>
                <div className='d-flex justify-content-center'>
                    <div style={{ width: '70%' }}>
                        <form onSubmit={ save }>
                            <p>Item Image</p>
                            <img src={ image && `data:image/png;base64,${ image }` } style={{ height: 300, display: 'block', margin: '10px auto 25px' }} />
                            <input type='file' ref={ el => this.el = el } style={{ display: 'block', margin: '0 auto' }}/>
                            <p className='mt-2'>Item Name</p>
                            <input value={ name } onChange={ ev => this.setState({ name: ev.target.value })} style={{ width: '80%', display: 'block', margin: '0 auto' }} />
                            <p className='mt-2'>Brand</p>
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
                            <p className='mt-2'>Category</p>
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
                            <p className='mt-2'>Color</p>
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
                            <button 
                                disabled={ !image || !name || !brandId || !categoryId || !colorId }
                                className='btn btn-primary btn-sm solid blank mt-4'
                                style={{ display: 'block', margin: '0 auto'}}
                                >Edit</button>
                        </form>
                        <button 
                            className='btn btn-primary btn-sm solid blank mt-4' 
                            onClick={() => deleteItem(product)}
                            style={{ display: 'block', margin: '0 auto'}}
                        >Delete</button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = (state, { match }) => {
    const id = match.params.id * 1;
    const product = state.closet.products.find(product => product.id === id * 1)
    return {
        ...state,
        product
    }
}

const mapDispatch = (dispatch, { history }) => {
    return {
      editItem(product) {
        dispatch(editItem(product))
      },
      deleteItem(product) {
        dispatch(deleteItem(product, history))
      }
    }
  }

export default connect(mapState, mapDispatch)(ProductEdit)
