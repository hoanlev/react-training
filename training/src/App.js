import React, { Component } from 'react';
import './App.css';
import Counter11 from './Counter1.1'
import Counter12 from './Counter1.2'
import Counter2 from './Counter2'




class App extends Component {


  render() {
    return (
      <>
        <Counter11 />
        <Counter12 />
        <Counter2 count={15} />
      </>
    );
  }
}

export default App;
