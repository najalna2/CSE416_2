import React from 'react';
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

            </nav>
            <div className='left'>
                <h2>left</h2>
            </div>
            <div className='right'>
                <h2>right</h2>
            </div>
            <Footer></Footer>
            </>
        )
    }
}