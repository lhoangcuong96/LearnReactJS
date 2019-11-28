import React, { Component } from 'react';
import { BroserRouter as Router, Route, NavLink, Link, } from 'react-router-dom'

const menu = [
  {
    name: "Trang Chủ",
    exact: true,
    to: "/",
  },
  {
    name: "Quản Lý Sản Phẩm ",
    exact: false,
    to: "/products"
  }
]
class Menu extends Component {
  showMenu = (menu) => {
    if (menu != null) {
      let result = null;
      result = menu.map((item, index) => {
        return (
          <Route path={item.to} exact={item.exact} children={({ match }) => {
            var active = match ? "active" : "";
            return (
              <li className={active}>
                <Link to={item.to}>{item.name}</Link>
              </li>
            )
          }}>
          </Route>)
      });
      return result
    }
  }
  render() {
    return (
      <div >
        <nav class="navbar navbar-default">
          <span class="navbar-brand" href="">Call Api</span>
          <ul class="nav navbar-nav">
            {this.showMenu(menu)}
          </ul>
        </nav>
      </div>
    );
  }

}

export default Menu;
