import React from "react"
import '../css/Header.css';
const Header = () => {
    return (
        <header className="header">
            <ul>
                <li><a href = '/'>Angelfish</a></li>
                <li><a href = '/'>Home</a></li>
                <li><a href ='/Ensemble'>Explore Ensembles</a></li>
            </ul>
        </header>
    )
}

export default Header