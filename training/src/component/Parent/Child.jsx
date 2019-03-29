import React, { Component } from 'react';

export class Child1Component extends Component {
    render() {
        return (<div>Real child</div>)
    }
}
export class CustomChildComponent extends Component {
    render() {
        const { url } = this.props.match;
        return (
            < div >Custom Child: {`${url}`}</div >)
    }
}