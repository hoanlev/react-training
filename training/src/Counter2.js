import React from 'react';

class Counter2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        }
    }

    incCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decCount = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.incCount}>+1</button>
                <button onClick={this.decCount}>-1</button>
            </div>
        );
    }
}

export default Counter2;