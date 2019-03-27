import React, { Component } from 'react';

class CounterDisplayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.counter
        }
    }
    static getDerivedStateFromProps(nextProps, nextState) {
        return {
            counter: nextProps.counter
        }
    }
    render() {
        return (
            <p>Count (pass data): {this.state.counter}</p>
        );
    }
}

class CounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    onIncrease = () => {
        this.setState(state => ({ ...state, counter: state.counter + 1 }));
    }
    onDecrease = () => {
        this.setState(state => ({ ...state, counter: state.counter - 1 }));
    }
    onIncrease_object = () => {
        this.setState({ ...this.state, counter: this.state.counter + 1 });
    }
    onDecrease_object = () => {
        this.setState({ ...this.state, counter: this.state.counter - 1 });
    }
    onIncrease_honest = () => {
        this.state = { ...this.state, counter: this.state.counter + 1 };
    }
    render() {
        console.log('render');
        return (
            <div>
                <p>Count: {this.state.counter}</p>
                <CounterDisplayer counter={this.state.counter}></CounterDisplayer>
                <button type="button" onClick={this.onIncrease}>Increase</button>
                <button type="button" onClick={this.onDecrease}>Decrease</button>
                <button type="button" onClick={this.onIncrease_object}>Increase (object)</button>
                <button type="button" onClick={this.onDecrease_object}>Decrease (object)</button>
                <button type="button" onClick={this.onIncrease_honest}>onIncrease honest</button>

            </div>
        );
    }
}
export default CounterComponent;