import React from "react";

class UpDown extends React.Component {

    constructor(props) {
        super(props);
        this.plusClick = this.plusClick.bind(this);
        this.minusClick = this.minusClick.bind(this);
    }

    plusClick(e) {
        this.props.onChange(1);
    }

    minusClick(e) {
        this.props.onChange(-1);
    }

    render() {
        return (
            <div>
                <button onClick={this.minusClick}>-</button>
                <button onClick={this.plusClick}>+</button>
            </div>
        );
    }
}

export default UpDown;