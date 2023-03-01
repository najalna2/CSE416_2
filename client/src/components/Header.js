import React from "react"
import '../css/Header.css';
const Header = () => {
    return (
        <header className="header">
            <div>
                <nav>
                    <ul>
                        <li>anglefish logo</li>
                        <li><a href = '/'>Home</a></li>
                        <li><a href ='/Ensemble'>Ensemble</a></li>
                    </ul>
               </nav>
            </div>
        </header>
    )
}

export default Header