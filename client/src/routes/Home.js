import Map from '../components/Map.js';
import Nav from '../components/Nav.js'

import '../css/Home.css';
import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='home-container'>
                <Map id='map'></Map>
                <Nav id='nav'></Nav>
            </div>
        )
    }
}