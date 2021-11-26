import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="d-flex  p-2 nav-container">
            <div className='brand-container d-flex justify-content-start'>
                <div className="header-image-container">
                    <img src="https://i.ibb.co/wMtjtGX/logo2.png" alt="" />
                </div>
                <div className="header-text-container">
                    <h2 className="gradient-text">Welcome To Let's Dance</h2>
                </div>
            </div>
            <div className='link-container flex-shrink-1'>
                <NavLink to="/home"> Home </NavLink>
                <NavLink to="/danceforms"> Dance Forms </NavLink>
                <NavLink to="/halloffame"> Hall of Fame </NavLink>
                <NavLink to="/about"> About Us </NavLink>
            </div>
        </nav>
    );
};

export default Header;