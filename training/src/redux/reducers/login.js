import { ADD_USER, GET_USER } from '../action/loginTypes';
import * as firebase from 'firebase';

const initState = {
  createdUser: null,
  User: null,
}

export default function (state = initState, action) {

  switch (action.type) {
    case ADD_USER: {
      const database = firebase.database();
      database.ref('user').push(action.payload.content);
      return {
        ...state,
        createdUser: action.payload
      }
    }
    case GET_USER: {
      const { UserLogin } = action.payload.content;
      localStorage.setItem("email", UserLogin.email);
      localStorage.setItem("username", UserLogin.username);
      return {
        ...state,
        User: action.payload.content
      }
    }
    default:
      return state;
  }
}
