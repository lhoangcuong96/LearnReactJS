import React ,{Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control'
import TaskList from './components/TaskList';
import Swal from 'sweetalert2';
import demo from './training/demo.js';
import * as actions from './actions/index';
import {connect} from 'react-redux'




//Lấy giá trị trong input
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      tasks:[// k cần
       
      ] ,// stats mặc định là rỗng => dù set state như thế nào thì reload hay f5 trang đều trở về mặc định
      //=> ở đây sử dụng localStorage lưu lại cái dữ liệu và set luôn cho stats khi gọi trang hay reload lại
      filter:{
        filterName:"",
        filterStatus:-1,
      },
      search:"",
      sort:{
        name:"name",
        value:true,
      }
      
    };
  }

 //lấy tasks lưu vào store parse ra gán vào state.tasks mặc định
  // componentWillMount(){// chạy trước khi component bất kì dc render trên client hay cả server(chạy trc trang khi load)
  //   if(localStorage &&localStorage.getItem('tasks') ){
  //     var tasks= JSON.parse(localStorage.getItem('tasks'));
  //     this.setState({
  //       tasks:tasks
  //     })
  //   }  
  // }=> k cần nữa do sử dụng bên redux
  showTask=()=>{
    console.log(this.state)
  }
  //đóng mở task from
  showTaskFrom=()=>{
    //kiểm tra nếu itemEditing tồn tại và khác ""(là đang edit)
    //=> bấm thêm lần nữa sẽ chỉ open và clear dữ liệu
    var {itemEditing}= this.props;
    if(itemEditing&&itemEditing!==""){
      this.props.onOpenForm();
    }
    else
    {
      this.props.onToggleForm();// từng hành động phải khai báo khác nhau 
      //=> k set state trực tiếp dc mà phải gọi đến action để xứ lý => hơi dài
    }
    this.props.onClearTask({
      id:"",
      name:"",
      status:false
    });// clear laị store khi bấm sửa xong bấm tiếp thêm(truyền lên rỗng)

    
    
    
  }
  closeTaskForm=()=>{
    this.props.onCloseFrom();
  }

  //Thêm bản ghi
  // onSubmit=(data)=>{
  //   var {tasks} = this.state;// clone nó xử lý rồi lại merge vào
  //   //kiểm tra thêm hay sửa
  //   if(data.id){// tồn tại id => sửa
  //       var indexData;
  //       tasks.map((task,index)=>{
  //         if(data!=null && task.id==data.id){
  //           indexData= index;
  //         }
  //       });
  //       tasks[indexData]=data;
  //   }
    
  //   //ngược lại là thêm
  //   else
  //   {
  //     if(data.status=="true"){// status kiểu string nên đổi lại
  //       data.status=true
  //     }
  //     else{
  //       data.status=false
  //     }
  //     var id;
  //     if(tasks.length>0){
  //       id = tasks[tasks.length-1].id+1;
  //     }
  //     else{
  //       id=1
  //     }
  //     tasks.push(data);
  //     tasks[tasks.length-1].id=id;
  //     Swal.fire({
  //       type:"success",
  //       title:"Success",
  //       text:"Success Adding",
  //       showCloseButton:true,
  //     })
  //   }
  //   this.setState({
  //     tasks:tasks
  //   })
  //   // lưu lại csdl trong localStorage giống cookie
  //   localStorage.setItem("tasks",JSON.stringify(tasks))// có thể lưu thẳng tasks như kiểu object luôn
  //   // nhưng khuyên là đổi kiểu json string ra rồi muốn lấy thì parse lại
  // }

  //update status
  onUpdateStatus=(id)=>{// task item truyền id về task list , từ tasklist truyền về APP
    var {tasks}= this.state;
    tasks.map((task,index)=>{// trường hợp id khó còn nếu id là số thì truyền thẳng task[id-1] là ra index
      if(task.id==id){
        tasks[index].status=!tasks[index].status;
        this.setState({
          tasks:tasks
        })
        localStorage.setItem("tasks",JSON.stringify(tasks))
      }
    })
  }

  onDelete=(data)=>{
    var {tasks}=this.state;
    tasks.map((item,index)=>{
     if(data!=null && item.id===data){
       try {
            tasks.splice(index,1);
            Swal.fire({
              type:"success",
              title:"Success",
              text:"Success Deleting",
              showCloseButton:true,
            });
            this.setState({
            tasks:tasks
            });
          localStorage.setItem("tasks",JSON.stringify(tasks))
       } 
       catch (error) {
         Swal.fire({
                      type:"error",
                      title:"Oops",
                      text:"Something wrong",
                      showCloseButton:true,
                    })
       }
     }
    })
  }
  // onEdit=(data)=>{
    
  //   this.showTaskFrom();
  //   var taskEdit;
  //   var {tasks}= this.state;
  //   tasks.map((item,index)=>{
  //     if(data!=null && item.id==data){
  //       taskEdit=index;
  //     }
  //   })
  //   this.setState({
  //     stateEditing:tasks[taskEdit]
  //   })
  // }
  onFilter=(filterName,filterStatus)=>{
    filterStatus= parseInt(filterStatus,10);
    this.setState({
      filter:{
        filterName:filterName.toLowerCase(),
        filterStatus:filterStatus
      }
    })
  }
  onSearch=(keySearch)=>{
    keySearch=keySearch.toLowerCase();
    this.setState({
      search:keySearch
    })
  }

  onSort=(sortBy,sortValue)=>{
    this.setState({
      sort:{
        name:sortBy,
        value:sortValue
      }
    })
  }

  render(){
    var {tasks , search, sort}= this.state;// thay vì var tasks= this.state.tasks 
    // filter trước khi đẩy tasks về 
    
    if(sort.name=="name"){
     if(sort.value==true){
      tasks.sort((a,b)=>{
        if(a.name>b.name) return 1;
        if(a.name<b.name) return -1;
        return 0;
      })}
      else if(sort.value==false){
        tasks.sort((a,b)=>{
          if(a.name>b.name) return -1;
          if(a.name<b.name) return 1;
        })
      }
  }
  ;if(sort.name=="status"){
    if(sort.value==true){
     tasks.sort((a,b)=>{
       if(a.status>b.status) return -1;
       if(a.status<b.status) return 1;
       return 0;
     })}
     else if(sort.value==false){
       tasks.sort((a,b)=>{
         if(a.status>b.status) return 1;
         if(a.status<b.status) return -1;
       })
     }
 }
  
    
    
    // var elmTaskForm=
    // this.props.isDisplayForm?<TaskForm 
    //                   onSubmit={this.onSubmit} 
    //                   task={this.state.stateEditing}// truyền dữ liệu cái cần edit vào  
    //                                                 // nếu bấm thêm sẽ là rỗng      
    //                 />:"";
   return( 
     <div className="container">
        <div>
            <h1 id="title">Quản Lý Công Việc</h1>
            <hr/>
        </div>
      <div className="row">
        {/* leftside */}
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <TaskForm 
                      onSubmit={this.onSubmit}     
          />
          </div>
        {/* End leftside */}

        {/* rightside */}
        <div className= {this.props.isDisplayForm===true ?"col-xs-12 col-sm-12 col-md-8 col-lg-8 ":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}> 
          <div >
            <button type="button" className="btn btn-info" onClick={this.showTaskFrom}><i className="glyphicon glyphicon-plus"></i> Thêm Công Việc</button>
            {/* <button type="button" className="btn btn-info" onClick={this.showTask}><i className="glyphicon glyphicon-plus"></i> Show Tasks</button> */}
          </div>
            <br/>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding:0}}>
            {/* Search Sort */}
              <Control
                onSearch={this.onSearch}
                onSort={this.onSort}
              />
            {/* End Search Sort */}
            {/* Table */}
              <TaskList 
                  //tasks={tasks} sử dụng redux nên k cần truyền vào nữa
                  onFilter={this.onFilter}
                />
            {/* End Table */}
          </div> 
       </div>
      </div>
     </div>
   );
  }
}
const mapStateToProps=state=>{
  return{
    isDisplayForm:state.isDisplay,// 
    itemEditing:state.itemEditing
  }
}
const mapDispatchToProps=(dispatch,props)=>{
  return{
    onToggleForm:()=>{//nó là 1 function
      dispatch(actions.toggleForm())
    },
    onCloseFrom:()=>{
      dispatch(actions.closeForm())
    },
    onClearTask:(task)=>{
      dispatch(actions.editItem(task))// clear laị store khi bấm sửa xong bấm tiếp thêm
      //truyền vào rỗng => clear hết tất cả
    },
    onOpenForm:()=>{
      dispatch(actions.openForm())
    }
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
