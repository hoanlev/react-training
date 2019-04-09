import { ADD_USER, LOAD_USER } from '../action/type';

export const addUser = user => ({
    type: ADD_USER,
    payload: {
        id: user.id,
        name: user.name,
        email: user.email
    }
});

export const loadUser = content => ({
    type: LOAD_USER,
    payload: {
        content
    }
});