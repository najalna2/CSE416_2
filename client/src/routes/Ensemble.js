import React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
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

            </nav>
            <div id='left'>
                <h2>left</h2>
            </div>
            <div id='right'>
                <h2>right</h2>
            </div>
            <Footer></Footer>
            </>
        )
    }
}