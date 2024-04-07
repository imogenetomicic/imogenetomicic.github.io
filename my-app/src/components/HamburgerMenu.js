import React from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24">
      <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

const HamburgerMenu = () => {
    return (
        <div className="hamburger-menu">
            <div className="hamburger">
                <HamburgerIcon />
            </div>
            <div className="menu" style={{fontSize: '22px'}}>
                <Link to="/me">Me</Link>
                <Link to="/work">Work</Link>
                <Link to="/ideas">Ideas</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default HamburgerMenu;
