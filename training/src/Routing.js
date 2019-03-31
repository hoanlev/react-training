import React from 'react';
import { BrowserRouter, Route, Link ,Switch, Redirect} from "react-router-dom";
import App from './App';
import Counter from './Counter';
import Table from './table';
import Form from './form';
import NotFound from './not-found'
import Parent from './parent';
import ReduxCounter from './redux-counter'
import ReduxCounter2 from './redux-counter2'
function BasicRouting() {
  var isAdmin = true;
    return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
          <li>
            < Link to="/form">Form </Link>
          </li>
          <li>
            < Link to="/parent">Parent </Link>
          </li>
          <li>
            < Link to="/nested-route">Nested route </Link>
          </li>
          <li>
            < Link to="/redux-counter">Redux Couter </Link>
          </li>
          <li>
            < Link to="/redux-counter2">Redux Couter2 </Link>
          </li>
          
        </ul>

        <Switch>
        <Route exact path="/" component={App} />
        <Route path="/counter" component={Counter} />
        <Route path="/table" component={Table} />
        <Route path="/form"  render={()=>(isAdmin ? <Form/>:(<Redirect to="/"/>))}  />
        <Route path="/parent" component={Parent} />
        <Route path="/nested-route" component={ChildRoute} />
        <Route path="/redux-counter" component={ReduxCounter} />
        <Route path="/redux-counter2" component={ReduxCounter2} />
        <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
    );
}
function ChildRoute({ match }) {
  console.log('ChildRoute match', match);
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
  console.log('ChildComponent', match);
  return (
    <div className='m-5'>
      <h3>Day la {match.params.childId.replace(/-/g,' ').toUpperCase()}</h3>
      <ReduxCounter></ReduxCounter>
    </div>
  );
}
export default BasicRouting;