import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

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
                <Button type="button" onClick={this.onIncrease}>Increase</Button>
                <Button type="button" onClick={this.onDecrease}>Decrease</Button>
                <Button type="button" onClick={this.onIncrease_object}>Increase (object)</Button>
                <Button type="button" onClick={this.onDecrease_object}>Decrease (object)</Button>
                <Button type="button" onClick={this.onIncrease_honest}>onIncrease honest</Button>
            </div>
        );
    }
}
export default CounterComponent;