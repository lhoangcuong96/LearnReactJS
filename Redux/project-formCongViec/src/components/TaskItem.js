import React ,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index'

class TaskItem extends Component{
  constructor(props){
    super(props);
    this.state={
      id:null,
      name:"",
      status:false
    }
  }
   onUpdateStatus=(id)=>{
     this.props.onUpdateStatus(id)
   }
   onDelete=(id)=>{
     this.props.onDelete(this.props.task.id)
   }
   onEdit=()=>{
     this.props.onEditTask(this.props.task);
     this.props.onOpenForm();
   }
  render(){
    var {task}= this.props
   return( 
    <tr>
        <td>{task.id}</td>
        <td>{task.name}</td>
        <td role="button" style={{textAlign:"center"}}>
          <div 
            onClick={()=>{this.onUpdateStatus(task.id)}} 
            className={task.status===true?"active":"unactive"}
          >
            {task.status===true?"Kích Hoat":"Ẩn "}
          </div>
        </td>
        <td>
            <button type="button" class="btn btn-info"onClick={this.onEdit} > 
            {/*k co tham số k cần dấu () trong func chứ k nó tự động chạy func*/}
              <i class="fa fa-fa fa-pencil-square-o" aria-hidden="true" ></i> Sửa
            </button> &#160;
            <button type="button" class="btn btn-danger" onClick={()=>{this.onDelete(task.id)}}>
            <i class="fa fa-trash-o" aria-hidden="true"></i> Xoá
            </button>   
        </td>
    </tr>
   );
      
  }
}
var mapStateToProps=state=>{
  return{
    }
}
var mapDispatchtoProps=(dispatch,props)=>{
  return{
    onOpenForm:()=>{
      dispatch(actions.openForm())
    },
    onUpdateStatus:(id)=>{
      dispatch(actions.updateStatus(id))
    },
     onDelete:(id)=>{
      dispatch(actions.deleteItem(id))
     },
     onEditTask:(task)=>{
      dispatch(actions.editItem(task))
     },
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(TaskItem);
