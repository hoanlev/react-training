import { createStore } from "redux";
 const reducer = function(state, action) {
     if( action.type ==='TANG'){
         return state + action.payload;
     }
     if( action.type ==='GIAM') {
         return state - action.payload;
     }
     return state;
 }
 const store = createStore(reducer,0);
 store.subscribe(()=>{
     console.log('change', store.getState());
 });
 store.dispatch({type:"GIAM", payload: 1});
 store.dispatch({type:"TANG", payload: 10});
 store.dispatch({type:"TANG", payload: 1});
 store.dispatch({type:"TANG", payload: 100});
 store.dispatch({type:"GIAM", payload: 1});