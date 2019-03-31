import React, { Component } from 'react';
class Hello extends Component {
    state = { count: false, data:[1,2,3,4,5,6,7,8,9]}
    render() { 
        return (<> <div>{this.state.count && 'ton tai' }</div> 
        
            
        <div>avc</div></>);
    }
}
 
export default Hello;