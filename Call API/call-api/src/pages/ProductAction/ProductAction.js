import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddPruductRequest, actGetProductRequest } from '../../actions/index';


class ProductAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: "",
            txtPrice: '',
            chkbStatus: false,
        }
    }
    //sử dụng didmount để lấy thông tin của thg cần sửa
    //vì tốn time get mà render lại trc , nên cần sử dụng didmount
    componentDidMount() {
        let { match } = this.props;
        if (match) {// lúc mình thêm mới thì k có match
            //=> cái là là phân biệt post hoặc put của minh
            let { id } = match.params
            // do bên reducer có products sau khi fetch kia rồi
            // nên k cần get product by id nữa
            // khỏi tốn 1 lần request

            // axios({
            //     method:"GET",
            //     url:`https://5dcc500985d1960014615ec6.mockapi.io/api/products/${id}`,
            //     data:null
            // }).then(res=>{
            //     this.setState({
            //         id:res.data.id,
            //         txtName:res.data.name,
            //         txtPrice:res.data.price,
            //         chkbStatus:res.data.status
            //     })
            // }).catch(err=>{
            //     console.log(err)
            // })
            this.props.onEditProduct(id)
            let { product } = this.props;
            console.log(product)
            // products.forEach((item) => {
            //     if (item.id == id) {
            //         product = item
            //     }
            // });
            // this.setState({
            //     id: product.id,
            //     txtName: product.name,
            //     txtPrice: product.price,
            //     chkbStatus: product.status
            // })
        }
    }
    //sau khi render rồi gọi action edit => state thay đổi
    //=> có component sẽ dc gửi sau render
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            let { id, name, price, status } = nextProps.itemEditing;
            this.setState({
                id: id,
                txtName: name,
                txtPrice: price,
                chkbStatus: status
            })
        }
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onSave = (event) => {
        event.preventDefault();
        let { id, txtName, txtPrice, chkbStatus } = this.state;
        let { history } = this.props;
        let product={
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        if (id != '') {
            axios({
                method: 'PUT',
                url: `https://5dcc500985d1960014615ec6.mockapi.io/api/products/${id}`,
                data: product
            }).then(res => {
                history.goBack()// history truyền trong router
            }).catch(err => {
                console.log(err)
            })
        }
        else {
            this.props.onAddProduct({
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            })
            history.goBack()
            // axios({
            //     method: 'POST',
            //     url: 'https://5dcc500985d1960014615ec6.mockapi.io/api/products',
            //     data: {
            //         name: txtName,
            //         price: txtPrice,
            //         status: chkbStatus
            //     }
            // }).then(res => {

            //     history.goBack()// history truyền trong router
            // }).catch(err => {
            //     console.log(err)
            // })
        }

        // callApi('products','POST',{
        //     name:txtName,
        //     price:txtPrice,
        //     status:chkbStatus
        // }).then(res=>{
        //     console.log(res)
        // })

    }
    render() {
        let { history } = this.props;
        return (
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{ left: "25%" }}>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Thêm Sản Phẩm</h3>
                    </div>
                    <div class="panel-body">
                        <form onSubmit={this.onSave}>
                            <div class="form-group">
                                <label for="" style={{ float: "left" }}>Tên Sản Phẩm</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id=""
                                    placeholder="Tên Sản Phẩm"
                                    name="txtName"
                                    value={this.state.txtName}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div class="form-group">
                                <label for="" style={{ float: "left" }}>Giá</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id=""
                                    placeholder="Giá"
                                    name="txtPrice"
                                    value={this.state.txtPrice}
                                    onChange={this.onChange}

                                />
                            </div>
                            <div class="form-group" style={{ float: "left" }}>
                                {/* label for để khi nháp vào label cũng check dc */}
                                <label for="status">Trạng Thái</label>
                                <div class="checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            lue=""
                                            id="status"
                                            name="chkbStatus"
                                            value={this.state.chkbStatus}
                                            onChange={this.onChange}
                                            checked={this.state.chkbStatus}//khi đổi lại thành true thì nó k có đổi
                                        //phải có thuôc tính này
                                        />
                                        Còn Hàng
                            </label>
                                </div>
                            </div>
                            <div style={{ clear: "both" }}></div>
                            <button
                                type="submit"
                                class="btn btn-primary form"
                                style={{ float: "left" }}
                                onClick={this.onSave}
                            >Lưu Lại</button>
                            <Link
                                className="btn btn-danger"
                                style={{ float: "left" }}
                                onClick={() => {
                                    history.goBack()
                                }}
                            >Back</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}
const mapStateToDispatch = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddPruductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(ProductAction);