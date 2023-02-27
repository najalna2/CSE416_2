import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import React from 'react';
import '../css/Map.css';

const position = [51.505, -0.09];

export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MapContainer center={position} zoom={13}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        )
    }
}