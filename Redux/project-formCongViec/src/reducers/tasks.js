// để khai báo các state

import * as types from '../constants/ActionType'
import Swal from 'sweetalert2';

var dataDefault =
  [
    {
      id: 1,
      name: "Học Lập Trình",
      status: true
    },
    {
      id: 2,
      name: "Học Lập Trình",
      status: true
    },
    {
      id: 3,
      name: "Học Lập Trình",
      status: false
    }
  ];

// func tìm kiếm index
var findIndex = (tasks, id) => {
  var result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index
    }
  })
  return result;
}

//get tasks from local
let tasks = JSON.parse(localStorage.getItem('tasks'));

//if tasks=null=> initial tasks
if (tasks == null) {
  tasks = dataDefault
}
var initialState = tasks;

//reducer
var myReducer = (state = initialState, action) => {
  switch (action.type) {// type k "s"

    //list All
    case types.LISS_ALL:
      return state;

    //Filter
    case types.FILTER_TABLE:
      var { filterName, filterStatus } = action.filter;

      if (filterName !== "") {
        // nếu gán kiểu này => bất đồng bộ 
        //state sau filter vd là 4 object
        //lần sau sẽ là filter tiếp 4 object đó do state vẫn chưa dc reset
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks = tasks.filter(task => {
          if (task.name !== undefined && task.name !== null) {
            console.log("dauxanh")
            return task.name.toLowerCase().indexOf(action.filter.filterName.toLowerCase()) !== -1;
          }
          return false;
        })
      }

      return tasks;

    //Search
    case types.SEARCH:
      let { keyword } = action;
      state.filter(task => {
        if ((task.name != undefined || task.name != null))
          return task.name === keyword;
      })
      return [...state]
    //Add task
    case types.ADD_TASK:
      if (action.task.id) {
        let editIndex = findIndex(tasks, action.task.id);
        let editItem = {
          id: action.task.id,
          name: action.task.name,
          status: action.task.status === 'true' ? true : false,
        }
        state.splice(editIndex, 1, editItem);
      }
      else {
        var newState = {
          id: (Math.floor(Math.random() * 101)),
          name: action.task.name,
          status: action.task.status === "true" ? true : false
        }
        state.push(newState);
      }
      Swal.fire({
        type: "success",
        title: "Success",
        text: "Success ",
        showCloseButton: true,
      })
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];// tránh thanm chiếu => cái này giống như copy ra bản mới rồi return về;

    //update status
    case types.UPDATE_STATUS:
      try {
        var index = findIndex(state, action.id);
        //state[index].status=!state[index].status
        //làm v sẽ k đc 
        //=> khi truy vấn t gọi đến state(kiểu object) và gọi đến phần tử status và thay đổi phấn tử đó
        //=> k thay đổi object(state) => dính nested=> k cập nhật lại view
        //clone ra xử lý rồi push vào để cấp nhật luôn 1 cái object(state)
        var cloneTask = {
          id: state[index].id,
          name: state[index].name,
          status: state[index].status
        }
        cloneTask.status = !cloneTask.status;
        state.splice(index, 1, cloneTask);
        localStorage.setItem('tasks', JSON.stringify(state));
        Swal.fire({
          type: "success",
          title: "Success",
          text: "Success Updating",
          showCloseButton: true,
        })
        return [...state]
      } catch (error) {
        Swal.fire({
          type: 'error',
          title: "Error",
          text: "Something Wrong",
          showCloseButton: true,
        })
        break
      }

    //delete item
    case types.DELETE_ITEM:
      try {
        var index = findIndex(state, action.id);
        state.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(state));
        Swal.fire({
          type: "success",
          title: "Success",
          text: "Success Updating",
          showCloseButton: true,
        })
        return [...state];
      }
      catch (error) {
        Swal.fire({
          type: "error",
          title: "Error",
          text: "Success Updating",
          showCloseButton: true,
        });
        break;
      }
    case types.EDIT_ITEM:
    default:
      return [...state];/// ... : tree dots => sao chép lại những thứ sau nó
    // vd state=[1,2,3,4]
    // state1=[...state,5] => state1 là sao chép lại của state rồi thêm 5
    // bthg state sẽ dính async => k cập nhập state liền mà chờ tất cả các xứ lý khác rồi làm 1 lần
    //=>xử lý state rồi nhưng chưa update liền
    //[...state] => clone phần xử lý rồi mà trả luôn khỏi cần chờ cập nhât

  }
}

export default myReducer;