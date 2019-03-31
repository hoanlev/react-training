import { ADD_COUNTER, REMOVE_COUNTER } from '../action/counterType'; 

const initState = {
    count: 0
}
export default function (state = initState, action) {
    switch(action.type) {
        case ADD_COUNTER: {
            return {
                count: state.count + 1
            }
        }
        case REMOVE_COUNTER: {
            return {
                count: state.count -1
            }
        }
        default:
        return state;
    }
}