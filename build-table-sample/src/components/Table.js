import React from "react";

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.addValueClick = this.addValueClick.bind(this);
        const columns = this.props.columns;
        this.state = {
            columns: columns === undefined ? 0 : columns, 
            numbers: []
        };
    }

    addValueClick() {
        this.setState((state, props) => {
            const max = state.numbers.length > 0 
                ? Math.max(...state.numbers)
                : 0;
            const next = state.numbers.push(max + 1);
            return ({values: next});
        });
    }

    render() {
        const columns = this.state.columns;
        const headers = this.props.headers;
        const numbers = this.state.numbers;
        return (
            <div>
                <table>
                    <thead key="thead">
                        <tr key="trhead">
                            {headers.map(h => <th key={h}>{h}</th>)}
                        </tr>
                    </thead>
                    <tbody key="tbody">
                        {group(columns, numbers).map(a => 
                            <tr key={a}>{a.map(e => <td key={e}>{e}</td>)}</tr>
                        )}
                    </tbody>
                </table>
                <button onClick={this.addValueClick}>+</button>
            </div>
        );
    }

}

function group(columns, arr) {
    if (columns === 0) return arr;
    var grouped = [];
    for (var i = 0; i < arr.length; i += columns) {
        grouped.push(arr.slice(i, i + columns));
    }
    return grouped;
}

export default Table;
