import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router-dom";

import Nav from './components/navbar'
import ProductList from './components/productList'
import Details from './components/details';
import Cart from './components/cart';
import Default from './components/default';
import cart from './'
import Modal from "./components/modal";

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component = {Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>

    );
  }
}

export default App;
