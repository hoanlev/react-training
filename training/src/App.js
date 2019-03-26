import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/nav';
class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <main className="container">
                    <Counters />
                </main>
            </div>
        );
    }
}

export default App;
