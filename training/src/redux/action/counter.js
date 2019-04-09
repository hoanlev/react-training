import { ADD_COUNTER, REMOVE_COUNTER } from '../action/type'; 

export const addCounter = content => ({
    type: ADD_COUNTER,
    payload: {
        content
    }
});

export const removeCounter = content => ({
    type: REMOVE_COUNTER,
    payload: {
        content
    }
});