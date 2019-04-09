import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
const inititalState = {
    user: [],
    fetching: false
}
const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case 'FETCH_USER_BEGIN': {
            return { ...state, fetching: true };
            break;
        }
        case 'DONE': {
            return { ...state, user: action.payload }
            break;
        }
            return state;
    }
}
const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);
store.subscribe(() => {
});
store.dispatch((dispatch) => {
    dispatch({ type: 'FETCH_USER_BEGIN' });
    axios.get('https://jsonplaceholder.typicode.com/todos').
        then((response) => {
            dispatch({ type: 'DONE', payload: response.data });
        })
})