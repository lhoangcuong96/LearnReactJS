import * as Types from '../constants/ActionType';
import axios from 'axios'


// fetch products về cho redux
//do thời gian fetch lâu mà dispatch nhanh => app crash("Error: Actions must be plain objects. Use custom middleware for async actions.")
//=> sử dụng redux thunk để hoãn thời gian dispatch
// npm install redux-thunk --save
// import redux thunk mấy cái kia xem index.js

//redux thunk nằm giữa action và dispatch
// vị trí hoạt động 
// trước khi reducer nhận được action 
// và sau khi action dc dispatch    
//Fetch product
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return axios({
            method: "GET",
            url: `https://5dcc500985d1960014615ec6.mockapi.io/api/products`,
            data: null,
        }).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}
export const updateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}
//End Fetch product

// Delete Product
//xoá product trên server
// rồi xoá product luôn trong reducer để khỏi load lại trang (thêm request get)
export const actDeleteProductRequest = (id) => {
    return dispatch => {
        axios({
            method: "DELETE",
            url: `https://5dcc500985d1960014615ec6.mockapi.io/api/products/${id}`,
            data: null,
        }).then(res => {
            dispatch(actDeleteProduct(id))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
//End Delete Product

//AddProduct
export const actAddPruductRequest = (product) => {
    return (dispatch) => {
        axios({
            method: "POST",
            url: "http://5dcc500985d1960014615ec6.mockapi.io/api/products",
            data: product
        }).then((res) => {
            dispatch(actAddPruduct(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}
export const actAddPruduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}
//End AddProduct

//Edit Product
    // get productEditing and show
export const actGetProductRequest = (id) => {
    return (dispatch) => {
        return axios({
            method: "PUT",
            url: `http://5dcc500985d1960014615ec6.mockapi.io/api/products/${id}`,
            data: null
        }).then((res) => {
            dispatch(actGetProduct(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}
export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

    // save new product
export const actUpdateProductRequest=(product)=>{
    return(dispatch)=>{
        axios({
            method:"PUT",
            url:`http://5dcc500985d1960014615ec6.mockapi.io/api/products/${product.id}`,
            data:product
        }).then((res)=>{
            dispatch(actUpdateProduct(res.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const actUpdateProduct=(product)=>{
    return{
        type:Types.UPDATE_PRODUCT,
        product
    }
}
//End Edit Product