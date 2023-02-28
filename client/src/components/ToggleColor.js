import '../css/ToggleColor.css';
import React from 'react';

export default class ToggleColor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <span>Selected Display Type: </span>
                <select onChange={(event) => this.props.syncColor(event.target.value)} value={this.props.color}>
                    <option value='none'>None</option>
                    <option value='party'>Party</option>
                    <option value='safe'>Safe</option>
                    <option value='incumbent'>Incumbent</option>
                </select>
            </div>
        )
    }
}