import React, { Component } from "react";
import "./App.css";

import Headers from "./components/common/Header";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Counter11 from "./components/counters/Counter1.1";
import DataTable from "./components/tabledata/table";
import PageNotFound from "./not-found";

class App extends Component {
  render() {
    return (
      <div className="container-fuild">
        <Headers />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/counter" component={Counter11} />
          <Route path="/table" component={DataTable} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
