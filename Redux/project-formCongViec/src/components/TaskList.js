import React,{Component} from 'react'
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import * as actions from '../actions/index'

class TaskList extends Component{
    constructor(props){
        super(props);
        this.state={
            filterName:"",
            filterStatus:-1, //=> all , active= 1 , hide= 0;
        }
    }
    
    onChange=(event)=>{
        var target= event.target;
        var name = target.name;
        var value= target.value;
        this.props.onFilterTable({
            [name]:value
        });
        this.setState({
            [name]:value
        });
        
    }
    render(){
        let {tasks}= this.props;
        let {filterName,filterStatus}= this.state;

        // // Filter tại component
        // if(filterName!==""){
        //     tasks=tasks.filter(task=>{
        //         if(task.name!==null&&task.name!=undefined)
        //         return task.name.toLowerCase().indexOf(filterName.toLowerCase())!==-1;
        //         return false         
        //     })
        // }
        // if(filterStatus!==-1){
        //     tasks=tasks.filter(task=>{
        //         filterStatus=filterStatus==1?true:false;
        //         return task.status===filterStatus;
        //     })
        // }
        var elmTasks = tasks.map((task,index)=>{
            return <TaskItem 
                        key={index} 
                        task={task} 
                    />
        })
        return( 
            <div>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng Thái</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                        <input 
                            type="text" 
                            name="filterName" 
                            id="input"
                            className="form-control" 
                            title="" 
                            value={filterName}
                            onChange={this.onChange}
                        />
                        </td>
                        <td>
                            <select 
                                name="filterStatus" 
                                id="input" 
                                className="form-control" 
                                required="required"
                                value={filterStatus}
                                onChange={this.onChange}
                            >
                            <option value="-1">Tất Cả</option>
                            <option value="1">Kích Hoạt</option>
                            <option value="0">Ẩn</option>
                            </select>
                        </td>
                    </tr>
                {elmTasks}
                </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{
        tasks:state.tasks
    }
}
const mapStateToDispatch=(dispatch,props)=>{
    return{
        onFilterTable:(filter)=>{
            dispatch(actions.filterTable(filter))
        }
    }
}
export default connect(mapStateToProps,mapStateToDispatch)(TaskList);// => đã connect với mapStateToProps và 
                                                        //trong component này đã tồn tại prop tasks