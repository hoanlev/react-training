import React, { Component } from 'react';

class Counter2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        };
    }

    XuLyTang() {
        this.setState({
            count: this.state.count + 1
        });
    }

    XuLyGiam() {
        this.setState({
            count: this.state.count - 1
        });
    }
    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
                <div>
                    <button type="button" class="btn btn-primary" onClick={() => this.XuLyTang()}>Tang</button>
                    <button type="button" class="btn btn-secondary" onClick={() => this.XuLyGiam()}>Giam</button>
                </div>
            </div>
        );
    }
}

export default Counter2;