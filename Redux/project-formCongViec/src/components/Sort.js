import React,{Component} from 'react';


class Sort extends Component{
    constructor(props){
        super(props);
        this.state={
            sortBy:"name",
            sortValue:true,
        }
    }
    onClick=(sortBy,sortValue)=>{
        this.setState({
            sortBy:sortBy,
            sortValue:sortValue
        })
        console.log(sortBy,sortValue)
        this.props.onSort(sortBy,sortValue)// bị dính cái bất đồng bộ nên k truyền trực tiếp state dc
                                            // state h chỉ dành cho cái nhấn ticked
                                            // nếu muốn xài state thì mình sẽ truyền ra app.js rồi lại truyền về cho 
                                            //sort rồi gán state , lúc này thì xài thoải mái
    }

    render(){
        return( 
            <div className="dropdown">
                <button className="btn btn-info dropbtn dropdown-toggle " data-toggle="dropdown">Sort &ensp;
                <i className="fa fa-caret-down"></i>
                </button>
                {/*   input group btn fontsize=0   ne6n phai chinh lai */}
                <ul 
                    class="dropdown-content" 
                    style={{listStyle:"none", paddingLeft:0}}
                >
                    {/* sử dụng arrow function mới truyền dc tham số*/}
                    <li className="seleted" onClick={()=>this.onClick("name",true)}>{/*sort theo name , từ a-z*/}
                        <a 
                            role="button" 
                            className={this.state.sortBy=="name"&& this.state.sortValue==true?"sortSelected":""} 
                        >
                            <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>  Tên A-Z
                        </a>
                    </li>
                    <li onClick={()=>this.onClick("name",false)}>{/*sort theo name , từ z-a*/}
                        <a 
                            role="button"
                            className={this.state.sortBy=="name"&& this.state.sortValue==false?"sortSelected":""} 
                        >
                            <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>  Tên Z-A
                        </a>
                    </li>
                    <br></br>
                    {/*<hr style={{width:"80%", height:"1px"}}></hr> */}
                    <li onClick={()=>this.onClick("status",true)}>{/*sort theo trạng thái active*/}
                        <a 
                            role="button"
                            className={this.state.sortBy=="status"&& this.state.sortValue==true?"sortSelected":""} 
                        >
                            Trạng Thái Kích Hoạt</a>
                    </li>
                    <li  onClick={()=>this.onClick("status",false)}>{/*sort theo trạng thái hide*/}
                        <a 
                            role="button"
                            className={this.state.sortBy=="status"&& this.state.sortValue==false?"sortSelected":""} 
                        >Trạng Thái Ẩn</a>
                    </li>                     
                </ul>
            </div> 
        )
    }

}
export default Sort