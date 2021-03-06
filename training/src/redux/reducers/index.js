import { combineReducers } from 'redux';
import counter from './counter';
const memberReducer = (state=[1,2,3], action) => {
    switch(action.type) {
        case "CHANGE_NAME": {
            state = [...state, action.payload];
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, age:action.payload};
            break;
        }
    }
    return state;
};
export default combineReducers({counter,memberReducer});