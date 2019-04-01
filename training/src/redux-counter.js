import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter } from './redux/action/counter';
import { removeCounter } from './redux/action/counter';
import { getCount } from './redux/selector';

class ReduxCouter extends Component {
    handleIncrease = () => {
        this.props.addCounter();
    }
    handleDecrease = () => {
        this.props.removeCounter();
    }
    render() {
        return (<div>
            <span>{this.props.count}</span>
            <button className='btn btn-primary btn-danger' onClick={this.handleIncrease}>Increase</button>
            <button className='btn btn-primary btn-danger' onClick={this.handleDecrease}>Increase</button>
        </div>);
    }
}
const mapStatetoProp = abc => {
    const count = getCount(abc);
    return count;
}
export default connect(
    mapStatetoProp,
    { addCounter, removeCounter }
)(ReduxCouter);