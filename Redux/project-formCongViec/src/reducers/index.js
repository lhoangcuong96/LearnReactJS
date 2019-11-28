// combine các state của file tasks.js vào reducers để xử lý

import {combineReducers} from 'redux';
import tasks from'./tasks';
import isDisplay from './isDisplay';
import itemEditing from './itemEditing';
import filterTable from './filterTable'

const myReducer =combineReducers({
    tasks,// viet tat cua tasks:tasks
    isDisplay,
    itemEditing,
    filterTable,
});

export default myReducer;