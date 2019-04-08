import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Login from './components/Login';
import Header from './routes/Header'
import LoadingComponent from './components/LoadingComponent'
import AuthennicatedComponent from './components/AuthennicatedComponent'
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <LoadingComponent>
                <div>

                    <Switch>
                        <Route path="/login" component={Login} exact={true} />
                        <AuthennicatedComponent>
                            <Header />
                            <Route path="/" component={App} exact={true} />
                        </AuthennicatedComponent>
                    </Switch>
                </div>
            </LoadingComponent>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
