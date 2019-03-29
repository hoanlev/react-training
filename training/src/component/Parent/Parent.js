import React, { Component } from 'react';
import { ParentRouting } from './routing'
function renderContent(match) {
    return (
        <div>
            <h1>Parent</h1>
            <strong>Please select a route.</strong>
            {<ParentRouting {...match}/>} 
            {/* not match = {match} */}
        </div >
    )
}

export function ParentFunction(data) {
    let { match } = data; //function
    return renderContent(match);
}

class ParentComponent extends Component {
    render() {
        const { match } = this.props;
        return renderContent(match);
    }
}
//export const Parent = ParentFunction
export const Parent = ParentComponent

