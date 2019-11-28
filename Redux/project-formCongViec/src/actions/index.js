import * as types from '../constants/ActionType'
export const listAll=()=>{
    return{
        type:types.LISS_ALL,
    }
}
export const addTask=(task)=>{
    return{
        type:types.ADD_TASK,
        task// tasks:tasks
    }
}
export const toggleForm=()=>{
    return{
        type:types.TOGGLE_FORM,    
    }
}
export const closeForm=()=>{
    return{
        type:types.CLOSE_FORM,  //type của action k có "s"   
    }
}
export const openForm=()=>{
    return{
        type:types.OPEN_FORM,  
    }
}
export const updateStatus=(id)=>{
    return{
        type:types.UPDATE_STATUS,
        id:id
    }
}
export const deleteItem=(id)=>{
    return{
        type:types.DELETE_ITEM,
        id:id
    }
}
export const editItem=(task)=>{
    return{
        type:types.EDIT_ITEM,
        task,
    }
}
export const filterTable=(filter)=>{
    return{
        type:types.FILTER_TABLE,
        filter,
    }
}
export const search=(keyword)=>{
    return{
        type:types.SEARCH,
        keyword
    }
}