import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link ,Switch , NavLink} from 'react-router-dom';
import Product from './Product'


const MenuLink=({to , exactOnlyWhenActive, label})=>{
  return(
    <Route path={to} exact={exactOnlyWhenActive} children={({match})=>{
      var active=match?"active":"";
      return(
        <li class={"list-group-item ${active}" }>
          <NavLink to={to} >{label}</NavLink>
        </li>
      )
    }} />
  )
}

class Products extends Component {
  render() {
    
    var products =
      [
        {
          id: 1,
          name: "Iphone 6  ",
          slug:"iphone",
          price: 10000
        },
        {
          id: 2,
          name: "Oppo 3s ",
          slug:"oppo",
          price: 10000
        },
        {
          id: 3,
          name: "Xiaomi 6 ",
          slug:"xiaomi",
          price: 10000
        },
        {
          id: 4,
          name: "Samsung s9",
          slug:"samsung",
          price: 10000
        }
      ]
      localStorage.setItem("products",JSON.stringify(products))
      var{match}= this.props;
      var {url} = match;
      var result=products.map((product,index)=>{
        return( 
        // <li class="list-group-item">{product.id} {product.name} {product.price}</li>
        <MenuLink to={`${url}/${product.slug}`} label={+product.id+" - "+product.name+" - "+product.price}></MenuLink>
        )
      });
    return (
      <div className="container">
        <h3>Danh Sách Sản Phẩm</h3>
        <div className="row">
          <ul class="list-group">
          {result}
          </ul>     
        </div>
        <div class="row">
          {/* <Route path="/products/:name" component={Product}></Route> */}
          {/* :name là :param sau khi sử dụng match  */}
        </div>
        
      </div>


    )
  }
}

export default Products;
