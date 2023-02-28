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
    color: '#FFFFFF',
    fillColor: '#FFFFFF',
    fillOpacity: 1,
    weight: 2,
};

export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }
    handleEachDistrict = (district, layer) => {
        layer.bindPopup(`District ${district.properties.Districts}`);
        // TEMP DATA
        layer.options.fillColor = Math.random() < 0.5 ? '#3498db' : '#e74c3c';
    }
    handleEachState = (state, layer) => {
        layer.on({
            click: (event) => {
                this.props.syncSelectedState(state.name);
            }
        });
    }
    render() {
        return (
            <MapContainer center={locations[this.props.selectedState].center} zoom={locations[this.props.selectedState].zoom} minZoom={6} maxBounds={[[20.636, -100.806], [41.592, -73.896]]}>
                <TileLayer url='https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=jj3bMkYjsUQfoqrwGXXs' />
                {this.props.selectedState !== 'ar' && (<GeoJSON style={mapStyle} data={arState.geometry} onEachFeature={this.handleEachState}></GeoJSON>)}
                {this.props.selectedState === 'ar' && (<GeoJSON style={mapStyle} data={arDistrict.features} onEachFeature={this.handleEachDistrict}></GeoJSON>)}
                {this.props.selectedState !== 'fl' && (<GeoJSON style={mapStyle} data={flState.geometry} onEachFeature={this.handleEachState}></GeoJSON>)}
                {this.props.selectedState === 'fl' && (<GeoJSON style={mapStyle} data={flDistrict.features} onEachFeature={this.handleEachDistrict}></GeoJSON>)}
                {this.props.selectedState !== 'ms' && (<GeoJSON style={mapStyle} data={msState.geometry} onEachFeature={this.handleEachState}></GeoJSON>)}
                {this.props.selectedState === 'ms' && (<GeoJSON style={mapStyle} data={msDistrict.features} onEachFeature={this.handleEachDistrict}></GeoJSON>)}
                <ChangeLocation center={locations[this.props.selectedState].center} zoom={locations[this.props.selectedState].zoom}/>
            </MapContainer>
        )
    }
}

function ChangeLocation(props) {
    const map = useMap();
    map.flyTo(props.center, props.zoom);
}