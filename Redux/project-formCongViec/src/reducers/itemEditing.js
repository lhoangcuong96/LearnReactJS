// để khai báo các state

import * as types from '../constants/ActionType'
var initialState ={
  id:"",
  name:"",
  status:false,
};
  

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_ITEM:
      return action.task
    default:
      return state;/// ... : tree dots => sao chép lại những thứ sau nó
                        // vd state=[1,2,3,4]
                        // state1=[...state,5] => state1 là sao chép lại của state rồi thêm 5
                        // bthg state sẽ dính async => k cập nhập state liền mà chờ tất cả các xứ lý khác rồi làm 1 lần
                        //=>xử lý state rồi nhưng chưa update liền
                        //[...state] => clone phần xử lý rồi mà trả luôn khỏi cần chờ cập nhât

  }
}

export default myReducer;