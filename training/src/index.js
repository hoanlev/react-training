import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CounterComponent from './component/counter'
import TableComponent from './component/table'
import Notfound from './component/not-found'
import { ListGroup } from 'react-bootstrap'

const routing = (
    <Router>
        <div>
            <ListGroup>
                <ListGroup.Item>
                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink activeClassName="active" to="/counter">Counter</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink activeClassName="active" to="/table">Table</NavLink>
                </ListGroup.Item>
            </ListGroup>
            <Route exact path="/" component={App} />
            <Route path="/counter" component={CounterComponent} />
            <Route path="/table" component={TableComponent} />
            <Route component={Notfound} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
