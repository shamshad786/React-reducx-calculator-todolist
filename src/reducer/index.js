import changeNumber from "./upDown";
import Calc from './multiplyDIvide'
import TodoList from "./todoReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNumber,
    Calc,
    TodoList
})


export default rootReducer; 