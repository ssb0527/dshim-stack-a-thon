import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import Shop from './components/Shop';
import Products from './components/Closet'
import {fetchBrands, fetchCatTemps, fetchCloset, fetchLooks, fetchCategories, fetchColors, me} from './store'
import Looks from './components/Looks';
import ProductForm from './components/ProductForm';
import ProductEdit from './components/ProductEdit';
import Weather from './components/Weather';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }
  componentDidUpdate(prevProps) {
    if(!prevProps.auth.id && this.props.auth.id){
      this.props.fetchData()
    }
  }
  render() {
    const {isLoggedIn} = this.props
    return (
      <div style={{ marginTop: 80 }}>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={ Home } />
            <Route path="/shop" component={ Shop } />
            <Route path="/mycloset/:filter?" component={ Products } />
            <Route path="/addNewItem" component={ ProductForm } />
            <Route path="/itemdetail/:id" component={ ProductEdit } />
            <Route path="/looks" component={ Looks } />
            <Route path="/weather" component={ Weather } />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path='/' exact component={ Login } />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ Signup } />
          </Switch>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    auth: state.auth
  }
}

const mapDispatch = dispatch => {
  return {
    async loadInitialData() {
      await dispatch(fetchCloset()),
      dispatch(me())
    },
    fetchData() {
      dispatch(fetchBrands()),
      dispatch(fetchCatTemps()),
      dispatch(fetchLooks()),
      dispatch(fetchCategories()),
      dispatch(fetchColors())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
