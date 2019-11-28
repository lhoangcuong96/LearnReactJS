    // vao app.js để import sử dụng
    import {createStore} from 'redux' ;
    import {status} from './actions/index';
    import {sort} from './actions/index';

    var initialState={
        status: false,
        sort:{
            by:"name",
            value:1,
        }
    }
    // reducer là 1 function
    var myReducer=(state = initialState,action)=>{ // có 2 tham số trong reducer là state action
        if( action.type==="TOGGLE_STATUS"){
            state.status=!state.status; 
        }
        if(action.type=="SORT"){
            state.sort={
                by:action.sort.by,
                value:action.sort.value,
            }
        }
       
        return state;
    }
    const store = createStore(myReducer);
    console.log(store.getState()); // truoc khi toggle status
    //thực hiện thay đổi status
    // var toggleAction={
    //     type:"TOGGLE_STATUS",
    // }=> chuyển sang file actions/index rồi import vào sử dụng
    store.dispatch(status());// dispatch ve reducer
    console.log(store.getState());// sau khi toggle status
    // thực hiện sort : name z->a
    // var sortAction ={
    //     type:"SORT",
    //     sort:{
    //         by:"name",
    //         value:-1,
    //     }   
    // }=> chuyển sang file actions/index rồi import vào sử dụng
    store.dispatch(sort());
    console.log(store.getState())// sau khi sort theo nam z->a