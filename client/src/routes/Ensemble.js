import * as React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Home from '../routes/Home.js'
import '../css/Ensemble.css'
import BarChartSample from '../components/BarChartSample.js'
import representativePhoto from '../images/biden.jpg'
import districtPhoto from '../images/district.png'
import imageCompression from 'browser-image-compression';
import '../css/Image.css'

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
                <div>
                
                    <div class="product-district">
                    <h3><p>District</p></h3>
                        <div class="product-img-div">
                            <img src={districtPhoto} class ='product-map' alt="district"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id='right'>
                <h3>BarChartSample</h3>
                <div style={{ width: 500, height: 500 }}>
                    <BarChartSample />
                </div>
            </div>
            
            <div id='left'>
                <div id='left'>
                    <div class="product-representative">
                        <div class="product-img-div">
                            <img src={representativePhoto} class ='product-img' alt="representative"/>
                        </div>
                    </div>
                    
                        <h3><p>representative Name</p></h3>
                </div>
            </div>
            
            </>
        )
    }
}