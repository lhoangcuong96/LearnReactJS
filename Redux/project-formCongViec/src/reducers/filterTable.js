// // để khai báo các state

// import * as types from '../constants/ActionType'
// var initialState ={
//   name:'',
//   status:-1,// lấy tất cả
// };
  

// var myReducer = (state = initialState, action) => {
//   let tasks= JSON.parse(localStorage.getItem('tasks'));
//   switch (action.type) {
//     case types.FILTER_TABLE:
//       let {filterName,filterStatus}=action.filter;
//       if(filterName&&filterName!==undefined&& filterName!==null){
//         state=state.filter(task=>{
//           if(task.name!==undefined && task.name!==null)
//           return task.name.toLowerCase().indexOf(filterName.toLowerCase())!==-1;
//           return false   
//         })
//       }
//       console.log(state)
//       if(filterStatus!=null&& filterStatus!==undefined){
//         filterStatus=filterStatus==1?true:false;// để === là sai do khác kiểu hay sao ấy
//         state=state.filter(task=>{
//           if(task.status!==undefined&&task.status!=null){
//             return task.status===filterStatus
//           }
//           return false
//         })
//       }
//       return tasks;
//     default:
//       return tasks;/// ... : tree dots => sao chép lại những thứ sau nó
//                         // vd state=[1,2,3,4]
//                         // state1=[...state,5] => state1 là sao chép lại của state rồi thêm 5
//                         // bthg state sẽ dính async => k cập nhập state liền mà chờ tất cả các xứ lý khác rồi làm 1 lần
//                         //=>xử lý state rồi nhưng chưa update liền
//                         //[...state] => clone phần xử lý rồi mà trả luôn khỏi cần chờ cập nhât

//   }
// }

// export default myReducer;