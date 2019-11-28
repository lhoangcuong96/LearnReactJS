import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';


// nếu đề bài k phải thêm class active cho thẻ a(là thẻ nav giờ) mà là thẻ li 
//=> phải làm sao
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {// phải là object(nằm trong {})
  return (
    <Route path={label} to={to} exact={activeOnlyWhenExact} children={({match}) => {// match phải là onject nằm trong {]}
     // route chủ yếu kiểm tra có match k => reutn về gì mới quan trọng 
     // nếu route match với link (match tồn tại)
      var active =match ? 'active abc' : '';
      return (
        <li className={active}>{/*nếu muốn thêm 2 class => sử dụng cú pháp is6 */}
        {/* <li className={'class1 ${class2}'}> */}
        {/*Class 1 là class mặc định cho li , còn class 2 là có match mới thêm vào*/}
          <Link
            to={to}
          >{label}</Link>
        </li>
      )
    }} />
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <nav class="navbar navbar-inverse">
            <ul class="nav navbar-nav">
              <MenuLink to="/" label="Trang Chủ" activeOnlyWhenExact={true}/>
              <MenuLink to="/about" label="Liên Hệ" activeOnlyWhenExact={true}/>
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
