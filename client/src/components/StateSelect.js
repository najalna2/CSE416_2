import '../css/StateSelect.css'
import React from 'react';

export default class StateSelect extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='stateselect-container'>
                <span>Selected State: </span>
                <select onChange={(event) => this.props.syncSelectedState(event.target.value)} value={this.props.selectedState}>
                    <option value='none'> -- Select a State -- </option>
                    <option value='ar'>Arkansas</option>
                    <option value='fl'>Florida</option>
                    <option value='ms'>Mississippi</option>
                </select>
            </div>
        )
    }
}