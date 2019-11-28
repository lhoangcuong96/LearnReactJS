import * as Types from '../constants/ActionType'
var initialState = [

]

const findIndex = (id, array) => {
    let result = -1;
    array.forEach((item, index) => {
        if (item.id == id)
            result = index
    })
    return result
}
const products = (state = initialState, action) => {
    switch (action.type) {
        // gán products sau khi fetch từ server vào redux
        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state];

        case Types.DELETE_PRODUCT:
            var index = findIndex(action.id, state)
            if (index != -1) {
                state.splice(index, 1)
            }
            return [...state]
        case Types.ADD_PRODUCT:
            state.push(action.product)
            return [...state]
        case Types.UPDATE_PRODUCT:
            var index=findIndex(action.product.id,state);
            state[index]=action.product;
            console.log([...state][index])
            return [...state]
        default:
            return [...state]
    }
};

export default products