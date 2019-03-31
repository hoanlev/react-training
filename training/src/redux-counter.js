import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addCounter} from './redux/action/counter';
import { getCount} from './redux/selector';

class ReduxCouter extends Component {
    handleIncrease = () => {
        this.props.addCounter();
    }
    render() { 
        console.log(this);
        return ( <div>
            <span>{this.props.count}</span>
            <button className='btn btn-primary btn-danger' onClick={this.handleIncrease}>Increase</button>
        </div> );
    }
}
 const mapStatetoProp = abc => {
     console.log('global store', abc);
     const count = getCount(abc);
     return count;
 }
export default connect(
    mapStatetoProp,
    {addCounter}
)(ReduxCouter);