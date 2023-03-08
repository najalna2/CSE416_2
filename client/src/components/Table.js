const axios = require('axios');

import '../css/Table.css'
import React from 'react';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.selectedState !== this.props.selectedState) {
            if(this.props.selectedState === 'none')
                return this.setState({
                    data: []
                });
            axios.get(`http://localhost:8080/server/afishapi/states/${this.props.selectedState.toUpperCase()}`).then(handleGet);
        }
    }
    handleGet(response) {
        this.setState({
            data: response.data
        });
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
                        return <tr key={row.district_number}>
                            <td>{row.district_number}</td>
                            <td>{row.name}</td>
                            <td>{row.party}</td>
                            <td>{row.election_results}</td>
                            <td>{row.geo_variance}</td>
                            <td>{row.pop_variance}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}

