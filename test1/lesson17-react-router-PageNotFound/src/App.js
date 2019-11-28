import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Menu from './components/Menu';
import Content from './components/Content'





class App extends Component {
  render() {
    return (
      <Router>
        <Menu/>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
      </Router>
        
    )
  }
}

export default App;
