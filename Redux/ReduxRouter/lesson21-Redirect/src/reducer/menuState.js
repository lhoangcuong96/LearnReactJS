import * as types from "../constants/ActionType"

var initialState=false
    
var locationState=localStorage.setItem("menuState",JSON.stringify(initialState));
if(locationState){
    initialState=locationState
}


var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.CHANGE_STATE:
            console.log(state)
            state=!state;
            console.log(state)
            
            return state;
        default : return state
    }
}

export default myReducer