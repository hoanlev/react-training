import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import PrivateRoute from './core/PrivateRoute'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CounterComponent from './component/counter'
import TableComponent from './component/table'
import Notfound from './component/not-found'
import RefComponent from'./component/Ref'
import {Parent} from './component/Parent/Parent'
import NeedAuthen from './component/NeedAuthen'
import Fobidden from './component/Fobidden'
import LoginComponent from './component/Login'
import { ListGroup, Container, Row, Col } from 'react-bootstrap'

const routing = (
    <Router>
        <div>
            <ListGroup>
                <Container>
                    <Row>
                        <Col>
                            <ListGroup.Item variant='primary'>
                                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                            </ListGroup.Item>
                        </Col>
                        <Col>
                            <ListGroup.Item>
                                <NavLink activeClassName="active" to="/counter">Counter</NavLink>
                            </ListGroup.Item>
                        </Col>
                        <Col>
                            <ListGroup.Item>
                                <NavLink activeClassName="active" to="/table">Table</NavLink>
                            </ListGroup.Item>
                        </Col>
                        <Col>
                        <ListGroup.Item>
                                <NavLink activeClassName="active" to="/ref">Ref</NavLink>
                            </ListGroup.Item>
                        </Col>
                        <Col>
                        <ListGroup.Item>
                                <NavLink activeClassName="active" to="/parent">Parent</NavLink>
                            </ListGroup.Item>
                        </Col>
                        <Col>
                        <ListGroup.Item>
                                <NavLink activeClassName="active" to="/needauthen">Need authen</NavLink>
                            </ListGroup.Item>
                        </Col>
                    </Row>
                </Container>
            </ListGroup>
            <div className = 'p-5'></div>
        <Switch >
            <Route exact path="/" component={App} />
            <Route path="/counter" component={CounterComponent} />
            <Route path="/table" component={TableComponent} />
            <Route path='/ref' component ={RefComponent}/>
            <Route path="/parent/" component={Parent} />
            <PrivateRoute path='/needauthen' component={NeedAuthen} />
            <Route path = '/fobidden' component = {Fobidden}/>
            <Route path = '/login' component = {LoginComponent}/>
            <Route component={Notfound} />
        </Switch>
        </div>
    </Router >
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
