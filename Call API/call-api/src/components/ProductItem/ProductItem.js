import React, { Component } from 'react';
import './ProductItem.css';
import {Link} from 'react-router-dom'

class Menu extends Component {
    onDelete=(id)=>{
        if(confirm("ban chac chan muon xoa k")){//eslint-disable-line
            //có dòng kia mới xài dc confirm
            //ra ngoài Product list page để xử lý 
            // thay vì sau khi làm xong sẽ phải gọi request lần nữa để load trang
            //thì mình sẽ xử lý luôn cái array y chang như gửi lên server
            //=> array của mình hiện có sẽ y chang server
            //=> k cần phải load lại
            this.props.onDelete(id)
        }
    }
    render() {
        
        let { product } = this.props;
        var { index } = this.props;
        return (
            <tr className="text-left">
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td >
                    <div role="button" className={product.status == true ? "statusTrue" : "statusFalse"}>
                        {product.status == true ? "Còn Hàng" : "Hết Hàng"}
                    </div>
                </td>
                <td>
                    <Link 
                        to={`/products/${product.id}/edit`}
                    class="btn btn-success"
                    >Sửa</Link>
                    <button
                        type="button"
                        class="btn btn-danger"
                        onClick={()=>this.onDelete(product.id)}
                    >Delete</button>
                </td>
            </tr>
        );
    }

}

export default Menu;
