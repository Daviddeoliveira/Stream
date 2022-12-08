import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return (
        <nav className="App-header" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                &nbsp;<h1 className="title is-1, text">&nbsp;Filmotec</h1>
            </div>
            <div id="menu" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/">Acceuil</Link>&nbsp;                            
                            <Link to="/favoris">Mes favoris</Link>&nbsp; 
                            <Link to="/recherche">Recherche de film</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;