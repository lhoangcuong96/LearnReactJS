import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

// biến chứa menu
const menu=[
  {
    name:"Home",
    to:"/",
    exact:true,
  },
  {
    name:"About",
    to:"/about",
    exact:false
  }
]


// nếu đề bài k phải thêm class active cho thẻ a(là thẻ nav giờ) mà là thẻ li 
//=> phải làm sao
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {// phải là object(nằm trong {})
  return(
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {// match phải là onject nằm trong {]}
      // route chủ yếu kiểm tra có match k => reutn về gì mới quan trọng 
      // nếu route match với link (match tồn tại)
      var active = match ? 'active abc' : '';
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
class Menu extends Component {
  showMenu=(menu)=>{
    let result=null;
    if(menu.length>0){
       result=menu.map((item,index)=>{
        return(
          <MenuLink key={index}  to={ item.to} label={item.name} activeOnlyWhenExact={item.exact} />
        )
      })
    }
    return result
  }
  render() {
    return (
      <nav class="navbar navbar-inverse">
        <ul class="nav navbar-nav">
          {this.showMenu(menu)}
        </ul>
      </nav>
    )
  }
}

export default Menu;
