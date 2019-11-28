import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link , NavLink} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <nav class="navbar navbar-inverse">
            <ul class="nav navbar-nav">
              <li class="active">
                {/* navlink nhiều options hơn */}
                {/* <Link to="/">Trang Chủ</Link>sử dụng thay thẻ <a> để khỏi load lại trang */}
                {/*Nếu trùng cái to="" với cái link=> active*/}
                <NavLink 
                  exact
                  to="/"
                  // activeStyle={{
                  //   backgroundColor:'white',
                  //   color:'black',
                  // }}
                  
                  className="active"
                  // có thể xài activeClassName=> trùng khốp=> thêm class
                >Trang Chủ</NavLink>{/*sử dụng thay thẻ <a> để khỏi load lại trang*/}
                {/* exact là để chính xác đường link luôn*/}
                {/* chứ "/About vẫn có "/" trong đó mà"*/}
              </li>
              <li>
                {/* <Link to="/about">Giới Thiệu</Link> */}
                <NavLink 
                  exact
                  to="/about"
                  activeClassName="active"
                  // activeStyle={{
                  //   backgroundColor:'white',
                  //   color:'black',
                  // }}
                >Giới Thiệu</NavLink>
              </li>
            </ul>
          </nav>
          {/* Menu */}

          {/* Content Page */}
          {/* component viết thường */}
          <Route path="/" exact component={Home} />{/* exact là để chính xác đường link luôn*/}
                                                  {/* chứ "/About vẫn có "/" trong đó mà"*/}
          <Route path="/About" exact component={About} />
          {/* Content Page */}
        </div>
      </Router>
    )
  }
}

export default App;
