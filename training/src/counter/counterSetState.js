import React, { Component } from 'react';

class CounterSetState extends Component {
    state = {
        counter: 0
    };

    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    reduction = () => {
        this.setState({ counter: this.state.counter - 1 });
    };
    

    render() {
        return (
            <div className="container">
                <button className="btn btn-success col-1" onClick={this.increment}>+</button>
                <span className="col-1">{this.state.counter}</span>
                <button className="btn btn-success col-1" onClick={this.reduction}>-</button>
            </div>
        );
    }
}

export default CounterSetState;
