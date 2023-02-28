import '../css/Table.css'
import React from 'react';

const districts = {
    none: 0,
    ar: 4,
    fl: 28,
    ms: 4
};

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.selectedState !== this.props.selectedState) {
            // TEMP DATA
            const tempData = [];
            for(let i = 0; i < districts[this.props.selectedState]; i ++)
                tempData.push({
                    name: "n/a",
                    party: Math.random() < 0.5 ? 'D' : 'R',
                    result: "n/a",
                    geo: "n/a",
                    pop: Math.random() * 10000,
                });
            this.setState({
                data: tempData
            });
        }
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Party</th>
                        <th>Result</th>
                        <th>Geo</th>
                        <th>Pop</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((row) => {
                        return <tr key={row.pop}>
                            <td>{row.name}</td>
                            <td>{row.party}</td>
                            <td>{row.result}</td>
                            <td>{row.geo}</td>
                            <td>{row.pop}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}

