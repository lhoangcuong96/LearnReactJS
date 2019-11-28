import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';
import router from './router'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <Menu />
          {/* End Menu */}

          {/* Content */}
         
          <div class="container">
            {this.showContent(router)} 
          </div>
          {/* End Content */}
        </div>
      </Router>
    );
  }
  showContent = (router) => {
    let result = null
    result = router.map((route, index) => {
      return <Route path={route.path} exact={route.exact} component={route.main} />
    })
  return  <Switch>{result}</Switch>
  }
}

export default App;
