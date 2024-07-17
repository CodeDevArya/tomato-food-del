import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-content">
                <h2 className="header-title">Order your favourite food here</h2>
                <p className="header-description">Choose from a diverse menu featuring a detectable array of dishes crafted with finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience one delicious meal at a time.</p>
                <button className="view-menu-button">View Menu</button>
            </div>
        </div>

    )
}

export default Header
