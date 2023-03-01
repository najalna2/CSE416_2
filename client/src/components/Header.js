import React from "react"
import '../css/Header.css';
const Header = () => {
    return (
        <header className="header">
            <div>
                <p>anglefish logo</p>
                <nav>
                    <ul>
                        <li><a href = ''>Home</a></li>
                        <li><a href ='/Ensemble'>Ensemble</a></li>
                    </ul>
               </nav>
            </div>
        </header>
    )
}

export default Header