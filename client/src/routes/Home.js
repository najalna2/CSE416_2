import Map from '../components/Map.js';
import Nav from '../components/Nav.js'

import '../css/Home.css';
import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedState: 'none'
        }
    }
    syncSelectedState(state) {
        this.setState({
            selectedState: state
        });
        console.log(state);
    }
    render() {
        return (
            <div id='home-container'>
                <Map id='map' selectedState={this.state.selectedState} syncSelectedState={(state) => this.syncSelectedState(state)}></Map>
                <Nav id='nav' selectedState={this.state.selectedState} syncSelectedState={(state) => this.syncSelectedState(state)}></Nav>
            </div>
        )
    }
}