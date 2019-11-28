export const status= ()=>{
    return{
        type:'TOGGLE_STATUS',
    }
}

export const sort=()=>{
    return{
        type:'SORT',
        sort:{
            by:"name",
            value:-1,
        }   
    }
}