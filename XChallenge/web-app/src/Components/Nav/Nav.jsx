import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
    return (
        <div className='nav-flex'>
            <div className="logo">
                Logo <img src="" alt="" />
            </div>


            <nav className="navbar">
                <Link to={"/"}>Home</Link>
                <Link to={"/resultados"}>Resultados</Link>
                <Link to={"/modalidades"}>Modalidades</Link>
                <Link to={"/meu-perfil"}>Meu Perfil</Link>
            </nav>

            <div className="user-icon">
                <Link to={"./login"}>Login</Link>
            </div>
        </div>
    );
};

export default Nav;