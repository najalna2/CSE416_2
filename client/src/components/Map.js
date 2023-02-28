import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import '../css/Map.css';
import React, { useEffect, useRef } from 'react';

import locations from '../data/locations.json';
import arState from '../data/arState.json';
import flState from '../data/flState.json';
import msState from '../data/msState.json';
import arDistrict from '../data/arDistrict.json';
import flDistrict from '../data/flDistrict.json';
import msDistrict from '../data/msDistrict.json';

const mapStyle = {
    color: '#000000',
    fillOpacity: 0,
    weight: 2,
};

export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }
    handleEachDistrict = (district, layer) => {
        // TEMP DATA
        layer.bindPopup(`
            <table>
                <tr>
                    <td>District</td>
                    <td>${district.properties.Districts}</td>
                </tr>
                <tr>
                    <td>Representative Name</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <td>2022 Election Results</td>
                    <td>${(Math.random() < 0.5) ? 'W' : 'L'}</td>
                </tr>
                <tr>
                    <td>Geometric Differences</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <td>Population Differences</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <td>Demographic Details</td>
                    <td>N/A</td>
                </tr>
            </table>
        `);
        layer.options.fillOpacity = 1;
        if(this.props.color === 'none') {
            layer.options.color = '#000000';
            layer.options.fillOpacity = 0;
        } else if(this.props.color === 'party')
            layer.options.fillColor = Math.random() < 0.5 ? '#3498DB' : '#E74C3C';
        else if(this.props.color === 'safe')
            layer.options.fillColor = Math.random() < 0.5 ? '#9b59b6' : '#f1c40f';
        else if(this.props.color === 'incumbent')
            layer.options.fillColor = Math.random() < 0.5 ? '#FFFFFF' : '#000000';
    }
    handleEachState = (state, layer) => {
        layer.on({
            click: (event) => {
                this.props.syncSelectedState(state.name);
            }
        });
    }
    componentDidUpdate() {
        console.log(this.props.color);
    }
    render() {
        return (
            <MapContainer center={locations[this.props.selectedState].center} zoom={locations[this.props.selectedState].zoom} minZoom={6} maxBounds={[[20.636, -100.806], [41.592, -73.896]]}>
                <TileLayer url='https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=jj3bMkYjsUQfoqrwGXXs' />
                {this.props.selectedState !== 'ar' && (<GeoJSON style={mapStyle} data={arState.geometry} onEachFeature={this.handleEachState}></GeoJSON>)}
                {this.props.selectedState === 'ar' && (<GeoJSON style={mapStyle} data={arDistrict.features} onEachFeature={this.handleEachDistrict} key={this.props.color}></GeoJSON>)}
                {this.props.selectedState !== 'fl' && (<GeoJSON style={mapStyle} data={flState.geometry} onEachFeature={this.handleEachState}></GeoJSON>)}
                {this.props.selectedState === 'fl' && (<GeoJSON style={mapStyle} data={flDistrict.features} onEachFeature={this.handleEachDistrict} key={this.props.color + 1}></GeoJSON>)}
                {this.props.selectedState !== 'ms' && (<GeoJSON style={mapStyle} data={msState.geometry} onEachFeature={this.handleEachState}></GeoJSON>)}
                {this.props.selectedState === 'ms' && (<GeoJSON style={mapStyle} data={msDistrict.features} onEachFeature={this.handleEachDistrict} key={this.props.color + 2}></GeoJSON>)}
                <ChangeLocation center={locations[this.props.selectedState].center} zoom={locations[this.props.selectedState].zoom}/>
            </MapContainer>
        )
    }
}

function ChangeLocation(props) {
    const map = useMap();
    map.flyTo(props.center, props.zoom);
}