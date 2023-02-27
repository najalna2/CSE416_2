import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import React from 'react';
import '../css/Map.css';

import arGeoJSON from '../data/ar.json';
import flGeoJSON from '../data/fl.json';
import msGeoJSON from '../data/ms.json';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.mapStyle = {
            color: 'white',
            fillColor: 'red',
            weight: 1,
        }
    }
    render() {
        return (
            <MapContainer center={[31.5256333, -87.7335333]} zoom={6}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <GeoJSON style={this.mapStyle} data={arGeoJSON.features}></GeoJSON>
                <GeoJSON style={this.mapStyle} data={flGeoJSON.features}></GeoJSON>
                <GeoJSON style={this.mapStyle} data={msGeoJSON.features}></GeoJSON>
            </MapContainer>
        )
    }
}