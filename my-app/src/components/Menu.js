import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import SocialMediaButtons from './SocialMediaButtons';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginLeft: '8px' }}><HamburgerMenu /></div>
            </div>
            <Link to="/" style={{ fontSize: '22px', color: 'inherit', textDecoration: 'none', flex: 1, textAlign: 'center' }}>IMOGENE</Link>
            <div style={{marginRight: '1.5%'}}>
                <SocialMediaButtons />
            </div>
        </div>
    );
};

export default Menu;
