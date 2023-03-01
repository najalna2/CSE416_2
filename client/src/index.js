import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './css/index.css';
import Home from './routes/Home.js';
import DistrictInfo from './routes/DistrictInfo.js';
import Ensemble from './routes/Ensemble';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> } />
                
                <Route path='/district_info/:id' element={ <DistrictInfo/> }/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
