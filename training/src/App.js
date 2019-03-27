import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterComponent from './component/counter'
import TableComponent from './component/table'
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <CounterComponent></CounterComponent>
                    <TableComponent></TableComponent>
                </header>
            </div>
        );
    }
}

export default App;
