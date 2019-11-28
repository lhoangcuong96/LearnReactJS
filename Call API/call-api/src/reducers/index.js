import {combineReducers} from 'redux';
import products from './products';
import itemEditing from '../reducers/itemEditing'

const appReducers= combineReducers({
    products,
    itemEditing
});

export default appReducers;