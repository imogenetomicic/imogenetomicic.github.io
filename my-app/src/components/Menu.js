import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <div style={{ marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ marginLeft: '8px' }}><HamburgerMenu /></div>
            <Link to="/" style={{ marginTop: '0px', fontSize: '22px', color: 'inherit', textDecoration: 'none' }}>IMOGENE</Link>
            <div style={{ width: '34px' }}></div>
        </div>
    );
};

export default Menu;



