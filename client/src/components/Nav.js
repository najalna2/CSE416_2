import '../css/Nav.css';
import React from 'react';

import Table from './Table.js';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <span>Selected State: </span>
                <select onChange={(event) => this.props.syncSelectedState(event.target.value)} value={this.props.selectedState}>
                    <option value='none'> -- Select a State -- </option>
                    <option value='ar'>Arkansas</option>
                    <option value='fl'>Florida</option>
                    <option value='ms'>Mississippi</option>
                </select>
                <Table selectedState={this.props.selectedState}/>
            </div>
        )
    }
}