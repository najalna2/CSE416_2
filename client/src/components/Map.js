import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import '../css/Map.css';
import React from 'react';

import arGeoJSON from '../data/ar.json';
import flGeoJSON from '../data/fl.json';
import msGeoJSON from '../data/ms.json';

export default class Map extends React.Component {
    //map boundary
    constructor(props) {
        super(props);
        this.mapStyle = {
            color: 'white',
            fillColor: '#000000',
            fillOpacity: 0.25,
            weight: 1,
        }
    }
    //click district
    onEachDistrict(district, layer) {
        layer.on({
            click: (event) => {
                console.log(event);
                event.target.setStyle({
                    fillColor: '#3498db',
                    fillOpacity: 0.5,
                });
            },
        });
    }
    //USA map
    render() {
        return (
            <MapContainer center={[31.5256333, -87.7335333]} zoom={6} minZoom={6} maxBounds={[[20.636, -100.806], [41.592, -73.896]]}>
                <TileLayer url='https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=jj3bMkYjsUQfoqrwGXXs' />
                <GeoJSON style={this.mapStyle} data={arGeoJSON.features} onEachFeature={this.onEachDistrict}></GeoJSON>
                <GeoJSON style={this.mapStyle} data={flGeoJSON.features} onEachFeature={this.onEachDistrict}></GeoJSON>
                <GeoJSON style={this.mapStyle} data={msGeoJSON.features} onEachFeature={this.onEachDistrict}></GeoJSON>
            </MapContainer>
        )
    }
}