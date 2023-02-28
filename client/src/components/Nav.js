import '../css/Nav.css';
import React from 'react';

import StateSelect from './StateSelect.js';
import ToggleColor from './ToggleColor.js';
import Table from './Table.js';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <StateSelect selectedState={this.props.selectedState} syncSelectedState={(state) => this.props.syncSelectedState(state)}/>
                <ToggleColor color={this.props.color} syncColor={(state) => this.props.syncColor(state)}/>
                <Table selectedState={this.props.selectedState}/>
            </div>
        )
    }
}