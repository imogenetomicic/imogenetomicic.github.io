import React from 'react';
import { NavLink } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24">
        <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#464455" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const HamburgerMenu = () => {
    return (
        <div className="hamburger-menu">
            <div className="hamburger">
                <HamburgerIcon />
            </div>
            <div className="menu" style={{ fontSize: '22px' }}>
                <NavLink to="/me" activeClassName="active">Me</NavLink>
                <NavLink to="/work" activeClassName="active">Work</NavLink>
                <NavLink to="/ideas" activeClassName="active">Ideas</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </div>
        </div>
    );
};

export default HamburgerMenu;
