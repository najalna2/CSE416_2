import * as React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Home from '../routes/Home.js'
import '../css/Ensemble.css'
import BarChartSample from '../components/BarChartSample.js'
import representativePhoto from '../images/biden.jpg'
import imageCompression from 'browser-image-compression';

export default class Ensemble extends React.Component {
    static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';
    constructor(props) {
        super(props);
        this.district = {
            numOfDistrict: 0,
            numOfIncumbent: 0,
            winIncumbent: 'none',
            geoVariation: 'none',
            popVariation: 'none'
        }
        
    }
    
    render() {
        return (
            <>
            <Header></Header>
            <nav>
                <span >District plan no: </span>
                <input type={"number"}></input>
                <span>Incumbents no: </span>
                <input type={"number"}></input>
                <span>Incumbents win: </span>
                <input type={"text"}></input>
                <span>Geographic Variation: </span>
                <input type={"number"}></input>
                <span>population Variation: </span>
                <input type={"number"}></input>
            </nav>
            <div id='left'>
                <h2>left</h2>
            </div>
            <div id='right'>
                <div style={{ width: 500, height: 500 }}>
                    <BarChartSample />
                </div>
            </div>
            <div id='left'>
                <div style={{ width: 300, height: 300 }}>
                <img src={representativePhoto} alt="representative"/>
                </div>
            </div>
            
            </>
        )
    }
}