import Map from '../components/Map.js';
import Nav from '../components/Nav.js'
import Layout from "./components/Layout/Layout";

import '../css/Home.css';
import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout>
                <div id='home-container'>
                    <Map id='map'></Map>
                    <Nav id='nav'></Nav>
                </div>
            </Layout>
        )
    }
}