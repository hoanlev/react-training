import { ADD_USER, LOAD_USER } from '../action/type';
import * as firebase from 'firebase';


const database = firebase.database();
const initState = {
    user: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case LOAD_USER: {
            var listUser = [];
            Object.keys(action.payload.content).forEach(function (key) {
                listUser.push({
                    id: key,
                    ...action.payload.content[key]
                })
            });

            return {
                ...state,
                user: listUser
            };
        }
        case ADD_USER: {
            var data = action.payload;
            database.ref().child("Users").child(data.id)
            .set({
                name: data.name,
                email: data.email
            });
            var newUser = state.user;
            newUser.push({
                id: data.id,
                name: data.name,
                email: data.email
            });
            return {
                ...state,
                user: newUser
            }
        }

        default:
            return state;
    }
}