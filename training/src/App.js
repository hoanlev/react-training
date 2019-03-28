import React, { Component, useState } from "react";
import "./App.css";

import Headers from "./components/common/Header";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Counter11 from "./components/counters/Counter1.1";
import DataTable from "./components/tabledata/table";
import PageNotFound from "./not-found";
import LoginForm from "./components/form/LoginForm";

function ChildRoute({ match }) {
  console.log("ChildRoute", match);
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/child-route-1`}>Child route 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/child-route-2`}>Child route 2</Link>
        </li>
        <li>
          <Link to={`${match.url}/child-route-3`}>Child route 3</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:childId`} component={ChildComponent} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a route.</h3>}
      />
    </div>
  );
}

function ChildComponent({ match }) {
  console.log("ChildComponet", match);
  return (
    <div>
      <h3>Day la {match.params.childId.replace(/-/g, " ").toUpperCase()}</h3>
    </div>
  );
}

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isAdmin: false
  //   };
  // }
  render() {
    return (
      <div className="container-fuild">
        <Headers />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/counter" component={Counter11} />
          <Route
            path="/table"
            render={() =>
              this.state.isAdmin ? <DataTable /> : <Redirect to="/" />
            }
          />
          <Route path="/form" component={LoginForm} />
          <Route path="/child" component={ChildRoute} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
