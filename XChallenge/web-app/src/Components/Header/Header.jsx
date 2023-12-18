import React from 'react';
import "./Header.css"

// Components
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <header className='header-flex'>
            <Nav/>
        </header>
    );
};

export default Header;