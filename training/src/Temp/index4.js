import { combineReducers, createStore } from 'redux';
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            state = { ...state, name: action.payload };
            break;
        }
        case "CHANGE_AGE": {
            state = { ...state, age: action.payload };
            break;
        }
    }
    return state;
};
const memberReducer = (state = [], action) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            state = [...state, action.payload];
            break;
        }
        case "CHANGE_AGE": {
            state = { ...state, age: action.payload };
            break;
        }
    }
    return state;
};
const reducers = combineReducers({
    user: userReducer,
    member: memberReducer
})
const store = createStore(reducers);
store.subscribe(() => {
})

store.dispatch({ type: "CHANGE_NAME", payload: "Heu" });
store.dispatch({ type: "CHANGE_AGE", payload: 24 });
store.dispatch({ type: "CHANGE_AGE", payload: 24 });