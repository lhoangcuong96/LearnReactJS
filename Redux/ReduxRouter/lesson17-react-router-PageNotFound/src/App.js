import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Menu from './components/Menu'





class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
            <Menu/>
          {/* Menu */}

           {/* Content Page */}
          <Switch>{/* import Switch */} 
            {/* component viết thường */}
            <Route path="/" exact component={Home} />{/* exact là để chính xác đường link luôn*/}
            {/* chứ "/About vẫn có "/" trong đó mà"*/}
            <Route path="/About" component={About} />
            {/* Content Page */}
            {/* Not Found  */} 
            <Route  component={NotFound} />
          </Switch>


        </div>
      </Router>
    )
  }
}

export default App;
