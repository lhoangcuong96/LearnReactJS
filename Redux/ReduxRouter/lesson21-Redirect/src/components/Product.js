import React, { Component } from 'react';
import {Route} from 'react-router-dom'

class Product extends Component {
  showProduct=(items,match)=>{
    var result= items.map((item,index)=>{
      if(item.slug==match.params.name)   
    return(<div>{item.name}</div>)
    })
    return result
    
  }
  render() {
    var {match}=this.props;
    var products= JSON.parse(localStorage.getItem("products"));
    console.log(match)
    
    return (
      <div>
      {this.showProduct(products,match)}
      </div>

    )
  }
}

export default Product;
