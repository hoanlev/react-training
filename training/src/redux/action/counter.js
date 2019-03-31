import { ADD_COUNTER, REMOVE_COUNTER } from '../action/counterType'; 

export const addCounter = content => ({
    type: ADD_COUNTER,
    payload: {
        content
    }
});