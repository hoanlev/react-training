import { GET_USER, ADD_USER } from "./loginTypes";

export const getUser = content => ({
    type: GET_USER,
    payload: {
        content
    }
})

export const addUser = content => ({
    type: ADD_USER,
    payload: {
        content
    }
})