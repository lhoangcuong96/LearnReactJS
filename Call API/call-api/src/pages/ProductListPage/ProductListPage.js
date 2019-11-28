import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import '../ProductListPage/ProductListPage.css';
import { connect } from 'react-redux';
import axios from 'axios';
import callApi from '../../utils/apiCaller';
import {actFetchProductsRequest, actDeleteProductRequest} from '../../actions/index';


class ProductListPage extends Component {
    
    componentDidMount() {// sau khi render lần đầu tiên
        // callApi('products','GET',null).then(res=>{
        //     console.log(res)
        // });

        // Tách axios ra file bên utils nên k xài
        // axios({
        //     method: "GET",
        //     url: "https://5dcc500985d1960014615ec6.mockapi.io/api/products",
        //     data: null,
        // }).then(res => {
        //     this.props.fetchProducts(res.data)
        // }).catch(err => {
        //     console.log(err)
        // })

        //do fetch products về redux luôn nên chỉ cần gọi redux
        this.props.fetchProducts()

    }
    onDelete = (id) => {
        // let { products } = this.props;
        // axios({
        //     method: "DELETE",
        //     url: `https://5dcc500985d1960014615ec6.mockapi.io/api/products/${id}`,
        //     data: null,
        // }).then(res => {
        //     // khỏi cần load lại trang mà mình xoá product đó trong products trên reducer của mình là dc
        //     // đờ tốn  1 request get lại 
        //     if (res.status === 200) {
        //         let index = this.findIndex(id, products);
        //         if (index != -1) {
        //             products.splice(index, 1);
        //             this.setState({
        //                 products: products
        //             })
        //         }
        //     }
        // }).catch(err => {
        //     console.log(err)
        // })


        //Tất cả xử lý tại trang action vs reducer hết rồi , h chỉ cần gọi thôi
        this.props.onDeleteProduct(id)
    }
    // findIndex = (id, products) => {
    //     let result = null;
    //     if (products != null) {
    //         products.map((item, index) => {
    //             if (item.id == id) {
    //                 result = index
    //             }
    //         })
    //     }
    //     return result
    // }
    render() {
        // var { products } = this.props
        // var  products  =[];
        // Nếu để products =[];
        // sau đó hàm render sẽ gọi axios lấy dữ liệu và gán vào products
        // vì lấy dữ liệu mất 5s , mà cái render trang có 1 s
        //=> chưa render dc dữ liệu ra
        // => mình sẽ sữ dụng state là life circle hook componentDidMount(sau khi render lần đầu tiên)
        // axios({
        //     method:"GET",
        //     url:"https://5dcc500985d1960014615ec6.mockapi.io/api/products",
        //     data:null,
        // }).then(res=>{
        //    products=res.data 
        // }).catch(err=>{
        //     console.log(err)
        // })

        var { products } = this.props;
        // state products đầu tiên k có gì hết
        //=> render k có gì
        // lúc này sau khi render=> lấy data server gán cho state
        // state thay đổi render lại
        return (
            <div className="row">
                {/* leftside */}
                {/* <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"style={{paddingLeft:0}}>
                    <div className="veritcal-menu">
                        <a className="active"><i class="fas fa-align-left fa-lg" style={{float:"left", padding:4}}></i> Home</a>
                        <a role="button">Quan Ly San Pham</a>
                        <a>Đậu xanh</a>
                        <a>Đậu xanh</a>
                        <a>Đậu xanh</a>
                    </div>
                </div> */}
                {/* /leftside */}

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link
                        type="button"
                        class="btn btn-info"
                        to="/products/add"
                        style={{ textDecoration: "none", color: "white", float: "left", marginBottom: 10 }}
                    >Thêm Sản Phẩm</Link>
                    <div style={{ clear: "both" }}></div>
                    {/* Product List */}
                    <ProductList>
                        {/* xử lý luôn cho thg ProductList và thg ProductList chỉ gọi lên=this.props.childen)*/}
                        {this.showProducts(products)}
                    </ProductList>
                    {/* /Product List */}
                </div>
            </div>

        )
    }
    showProducts = (products) => {
        let result = null;
        result = products.map((product, index) => {
            return (<ProductItem
                key={index}
                product={product}
                index={index}
                onDelete={this.onDelete}
            />)
        })
        return result
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapStateToDispatch=(dispatch,props)=>{
    return{
        fetchProducts:()=>{
            dispatch(actFetchProductsRequest())
        },
        onDeleteProduct:(id)=>{
            
            dispatch(actDeleteProductRequest(id))
        },
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(ProductListPage)