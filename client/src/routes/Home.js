import Map from '../components/Map.js';
import Nav from '../components/Nav.js'

import '../css/Home.css';
import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedState: 'none',
            color: 'party'
        }
    }
    syncSelectedState(selectedState) {
        this.setState({
            selectedState: selectedState
        });
    }
    syncColor(color) {
        this.setState({
            color: color
        });
    }
    render() {
        return (
            <div id='home-container'>
                <Map id='map'
                    selectedState={this.state.selectedState}
                    color={this.state.color}
                    syncSelectedState={(state) => this.syncSelectedState(state)}
                ></Map>
                <Nav id='nav'
                    selectedState={this.state.selectedState}
                    color={this.state.color}
                    syncSelectedState={(state) => this.syncSelectedState(state)}
                    syncColor={(color) => this.syncColor(color)}
                ></Nav>
            </div>
        )
    }
}