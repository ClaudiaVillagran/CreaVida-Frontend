import { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <nav className="navbar__container-lists">

            <ul className="container-lists__menu-list">
                <li className="menu-list__item">
                    <NavLink to='/' className="menu-list__link" id="menu-list__link">
                        <i className="fa-solid fa-user"></i>
                        <span className="menu-list__title">INICIO</span>
                    </NavLink>
                    <NavLink to='/nosotros' className="menu-list__link">
                        <i className="fa-solid fa-user"></i>
                        <span className="menu-list__title">Acerca de</span>
                    </NavLink>
                    <NavLink to='/eventos' className="menu-list__link">
                        <i className="fa-solid fa-user"></i>
                        <span className="menu-list__title">Eventos</span>
                    </NavLink>
                    <NavLink to='/participa' className="menu-list__link">
                        <i className="fa-solid fa-user"></i>
                        <span className="menu-list__title">Participa</span>
                    </NavLink>
                    <NavLink to='/contacto' className="menu-list__link">
                        <i className="fa-solid fa-user"></i>
                        <span className="menu-list__title">Contacto</span>
                    </NavLink>
                    <NavLink to='/login' className="menu-list__link">
                        <i className="fa-solid fa-user"></i>
                        <span className="menu-list__title">Login</span>
                    </NavLink>
                </li>

                {/* <li className="menu-list__item">
                    <NavLink to='/registro' className="menu-list__link">
                        <i className="fa-solid fa-users"></i>
                        <span className="menu-list__title">Registro</span>
                    </NavLink>
                </li> */}
            </ul>

        </nav>

  )
}
