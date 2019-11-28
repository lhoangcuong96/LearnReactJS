import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'


class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            name:"",
            status:false,
        };
    };
   
    componentWillMount(){// chỉ được gọi khi thg prop trước khi prop dc gọi lần 1
        if(this.props.itemEditing){// gọi prop lần 2 thì componentWillMount sẽ không dc gọi thêm nữa
            this.setState({//=> khi bấm thêm , mà bấm tiếp sửa => nó vẫn là thêm chứ k phải là sửa nữa
                id:this.props.itemEditing.id,
                name:this.props.itemEditing.name,
                status:this.props.itemEditing.status
            })
        }
    }

    // khi bấm thêm => component TaskForm dc tạo => componentWillMount dc tạo => bấm sửa (hay bấm sửa 2 lần)
    //=> k thể chạy lại componentWillMount 
    //=> nó vẫn giữ nguyên là thêm
    //=> sử dụng componentWillReceiveProps để nếu nhận dc 1 yêu cầu khác
    componentWillReceiveProps(nextProps){
        if(nextProps&&nextProps.itemEditing){
            this.setState({
                id:nextProps.itemEditing.id,
                name:nextProps.itemEditing.name,
                status:nextProps.itemEditing.status
            })
        }
        
        if(nextProps&& nextProps.itemEditing===null&&nextProps.itemEditing===undefined){// từ sửa sang thêm (lúc này this.props.task = this.props.editing==null)
            this.onClear();
        }
    }
    closeTaskForm=()=>{
        this.props.onCloseForm();
    }
    onChange=(event)=>{
        var target= event.target;//target ở đây là ô input
        var name = target.name;
        var value= target.value;
        this.setState({
            [name]:value// set kiểu dynamic 
                        //thay vì txtUsername:value ; hay txtPassWord:value
                        //thì ta lấy [name]:value do name = txtUserName.... tuỳ từng input name sẽ khác nhau
                        //thì cái key dc set sẽ khác nhau
        })
    }
    onClear=()=>{
        this.setState({
            //id:"", k sét id để khi sửa mà reset lại vẫn là còn id và vẫn là sửa chứ k còn về là thêm
            name:"",
            status:false
        })
    }
    onHandleSubmit=(event )=>{
        event.preventDefault();
        this.props.onAddTask(this.state);
        this.onClear();
    }
    // onSubmit=(event)=>{
    //     //event.preventDefault();
    //     // this.setState({
    //     //     name:"dauxanh",
    //     //     status:true
    //     // });
    //     // state là bất đồng bộ 
    //     // => thay đổi state 
    //     //nó vẫn sẽ gửi vẫn là state cũ
    //     this.props.onSubmit(this.state);
    // }
    render(){
        var {id} = this.state
        if(!this.props.isDisplayForm) return"";
        return( 
            <div class="panel panel-warning">
                <div class="panel-heading" >
                    <strong class="panel-title " >
                      {id!==""?"Cập nhật công việc":"Thêm công việc"}
                      {/* Thêm và sửa khác nhau chỗ có id hay k có id */}
                    </strong> 
                    <span className="fa fa-times-circle fa-pull-right" role="button" aria-hidden="true" onClick={this.closeTaskForm}></span>
                   
                </div>
                <div class="panel-body">
                    <strong>Tên :</strong>
                    <input 
                        type="email" 
                        name="name" 
                        id="input" 
                        class="form-control"  
                        required="required"
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    <br/>
                    <strong>Trạng Thái</strong>
                    <select 
                        name="status" 
                        id="input" 
                        class="form-control" 
                        required="required"
                        onChange={this.onChange}
                        value={this.state.status}
                    >
                        <option value={false}>Ẩn </option>
                        <option value={true}>Kích Hoạt</option>
                    </select>
                    <br/>
                    <button 
                        type="button" 
                        class="btn btn-success"
                        onClick={this.onHandleSubmit}
                    ><i class="fa fa-plus-circle" aria-hidden="true"></i>{id!==""?" Sửa":" Thêm"}</button>  &nbsp;
                    <button 
                        type="button" 
                        class="btn btn-danger"
                        onClick={this.onClear}
                    >Reset</button>
                </div>
            </div>    
        )
    }
}

const mapStateToProps=(state)=>{// trả dữ liệu về 1 cái props
    return{
        isDisplayForm:state.isDisplay,
        itemEditing:state.itemEditing
    }
}
const mapDispatchToProps=(dispatch,props)=>{// gọi đến action
    return{
        onAddTask:(task)=>{
            dispatch(actions.addTask(task));
        },
        onCloseForm:()=>{
            dispatch(actions.closeForm());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm)