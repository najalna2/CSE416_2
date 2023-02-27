import React from 'react';
import '../css/Home.css';

import Map from '../components/Map.js';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Map></Map>
        )
    }
}