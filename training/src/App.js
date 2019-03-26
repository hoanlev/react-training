import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import './bootstrap.min.css';
import Data from './Data';

class App extends Component {
  render() {
    return (
      <div>
        <Counter1 />
        <Counter2 count={0} />
        <Data />
      </div>

    );
  }
}

export default App;
