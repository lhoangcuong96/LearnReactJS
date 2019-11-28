// để khai báo các state

import * as types from '../constants/ActionType'
var isDisplay=false;

var isDisplayForm=(state=isDisplay,action)=>{// action k 's'
    switch(action.type){
        case types.TOGGLE_FORM:
            return !state;
        case types.CLOSE_FORM:
            return false;
        case types.OPEN_FORM:
            return true; 
        default:
            return state;
    }
}

export default isDisplayForm;