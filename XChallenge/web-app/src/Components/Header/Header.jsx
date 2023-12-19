import React, { useContext } from 'react';
import "./Header.css"

// Components
import Nav from '../Nav/Nav';
import { ThemeContext } from '../../Context/ThemeContext';


const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext);


    return (
        <header className={`header-flex-${theme}`}>
            <Nav/>
        </header>
    );
};

export default Header;