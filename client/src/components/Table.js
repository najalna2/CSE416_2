import '../css/Table.css'
import React from 'react';

const districts = {
    none: 0,
    ar: 4,
    fl: 28,
    ms: 4
};

const randomFullnames = [
    "Sophia Rodriguez",
    "Liam Johnson",
    "Olivia Smith",
    "Noah Williams",
    "Emma Brown",
    "Oliver Garcia",
    "Ava Martinez",
    "Elijah Davis",
    "Isabella Anderson",
    "Lucas Martinez",
    "Mia Hernandez",
    "Mason Jackson",
    "Charlotte Lee",
    "Logan Wright",
    "Amelia Taylor",
    "Ethan Moore",
    "Harper Wilson",
    "Alexander Perez",
    "Evelyn Martin",
    "Daniel Nelson"
];

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
                    district: i + 1,
                    name: randomFullnames[Math.floor(Math.random() * randomFullnames.length)],
                    party: Math.random() < 0.5 ? 'Dem.' : 'Rep.',
                    result: Math.random() < 0.5 ? 'Won' : 'Lost',
                    geo: Math.round(Math.random() * 100000) / 100000,
                    pop: Math.floor(Math.random() * 1000 - 500),
                });
            this.setState({
                data: tempData
            });
        }
    }
    render() {
        return (
            this.state.data.length !== 0 && <table id='district-table'>
                <thead>
                    <tr>
                        <th>Dis.</th>
                        <th>Name</th>
                        <th>Party</th>
                        <th>Result</th>
                        <th>Geo Var.</th>
                        <th>Pop Δ</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((row) => {
                        return <tr key={row.district}>
                            <td>{row.district}</td>
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

