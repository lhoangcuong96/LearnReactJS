import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem'

class ProductList extends Component {
  render() {
    return (
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title text-left" >Quản Lý Sản Phẩm</h3>
        </div>
        <div class="panel-body">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Product Items */}
                  {this.props.children}
                {/* /Product Items */}
              </tbody>
            </table>
          </div>

        </div>
      </div>

    );
  }

}

export default ProductList;
