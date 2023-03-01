import * as React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Home from '../routes/Home.js'
import '../css/Ensemble.css'


export default class Ensemble extends React.Component {
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
                <h2>right</h2>
            </div>
            <div id='right'>
                <h2>left</h2>
            </div>
            </>
        )
    }
}