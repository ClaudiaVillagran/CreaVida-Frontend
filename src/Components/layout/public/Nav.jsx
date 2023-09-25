
import { useState } from "react";
import {  NavLink } from "react-router-dom"

export const Nav = ( ) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("toggleMenu")
        setMenuOpen(!menuOpen);

    };
    return (
        <>
        
            <nav className="navbar__container-lists navbar">
            <div className="container-lists__redes-list">
                    <a href="https://www.instagram.com/somosicfa/"><div className="icon-instagram icon"></div></a>
                    <a href="https://api.whatsapp.com/send?phone=56945282176&text=¡Hola! ¿Cómo estás?"><div className="icon-whatsapp icon"></div></a>
                    <a href="https://www.facebook.com/somosicfa/"><div className="icon-facebook icon"></div></a>

                </div>
                {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
                <button id="menu-button" className={`burger-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div className="icon-menu"></div>
                </button>
                <div className="container__menu" >
                    <ul id="menu" className={`container-lists__menu-list hidden ${menuOpen ? "open" : ""}`}  >
                        <li className="menu-list__item ">
                            <NavLink to='/' className="menu-list__link" id="menu-list__link">
                                <span className="menu-list__title">INICIO</span>
                            </NavLink>
                        </li>
                        <li className="menu-list__item ">
                            <NavLink to='/acercaDe' className="menu-list__link">
                                <span className="menu-list__title">Acerca de</span>
                            </NavLink>
                        </li>
                        <li className="menu-list__item ">
                            <NavLink to='/eventos' className="menu-list__link">
                                <span className="menu-list__title">Eventos</span>
                            </NavLink>
                        </li>

                        <li className="menu-list__item ">
                            <NavLink to='/participa' className="menu-list__link">
                                <span className="menu-list__title">Participa</span>
                            </NavLink>
                        </li>
                        <li className="menu-list__item ">

                            <NavLink to='/login' className="menu-list__link">

                                <span className="menu-list__title">Login</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                
            </nav >

        </>
    )
}
