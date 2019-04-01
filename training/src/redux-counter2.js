import React, { Component } from 'react';
import { connect } from 'react-redux';
class ReduxCounter2 extends Component {
    render() {
        return (<div>{this.props.counter.count}</div>);
    }
}

const mapStatetoProp = state => {
    return state;
}
export default connect(
    mapStatetoProp,
    null
)(ReduxCounter2);