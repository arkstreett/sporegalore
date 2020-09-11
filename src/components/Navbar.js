import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className="spore-navigation">
            
            
            
            <div className="overlay">
                    <Link to='/' style={{ textDecoration: "none" }}><h1>Spore Galore</h1></Link>
            </div>

            

            <div className="search-navigation">
                <div style={{ display: 'flex'}}>

                <h3 style={{ color: "white", fontFamily: "Londrina Solid", letterSpacing: "1.5px"}}>Search:</h3>
                <input
                type="text"
                className="searchbar"
                />
                </div>

                <div className="shopping-cart-container" style={{ height: "60px"}}>
                    <Link to="/checkout"><a href="#" className="shopping-cart"><ion-icon name="cart-outline" style={{ height: "30px", width: "30px", marginTop: "15px"}}></ion-icon></a></Link>
                </div>
            </div>
            
            <div className="spore-links">
                <Link to="/spores"><a>Spores for Microscopy</a></Link>

                <Link to="/culture"><a>Mushroom Culture</a></Link>

                <Link to="/about"><a>About Us</a></Link>
            </div>

            

            
        </div>
    )
}

export default Navbar;
