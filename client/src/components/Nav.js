import '../css/Nav.css';
import React from 'react';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <span>states: </span>
                <select onChange={(event) => this.props.syncSelectedState(event.target.value)} value={this.props.selectedState}>
                    <option disabled value='none'> -- select a state -- </option>
                    <option value='ar'>Arkansas</option>
                    <option value='fl'>Florida</option>
                    <option value='ms'>Mississippi</option>
                </select>
            </div>
        )
    }
}