import React, { Component } from 'react';
import './App.css';
import Counter11 from './Counter1.1'
import Counter12 from './Counter1.2'
import Counter2 from './Counter2'
import DataTable from './table'



class App extends Component {



  render() {
    return (
      <>
        <h3>Class + SetState</h3>
        <Counter11 />
        <h3>Function</h3>
        <Counter12 />
        <h3>Parent-Child</h3>
        <Counter2 count={15} />

        <DataTable />
      </>
    );
  }
}

export default App;
