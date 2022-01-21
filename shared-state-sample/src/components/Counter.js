import React from "react";

class Counter extends React.Component {
    
    render() {
        const number = this.props.number;
        return (<span>{number}</span>);
    }

}

export default Counter;