import { NavLink } from "react-router-dom"
import avatar from '../../../assets/img/MarcaFCV_transparente.png'
import iconDirection from '../../../assets/icons/direccion.jpg'
import iconCorreo from '../../../assets/icons/correo-electronico.jpg'
import iconTelefono from '../../../assets/icons/telefono.png'

export const Footer = () => {


    return (
        <footer className="footer__container" >
            <div className="footer-primary">
                <div className="primary__info-company">
                    <h3>CreaVida</h3>
                    <p>Transformando vidas a través de la creatividad y el compromiso. Unimos fuerzas para fomentar el cambio positivo mediante iniciativas que inspiran, educan y empoderan. ¡Únete a nosotros en la construcción de un futuro lleno de esperanza y posibilidades!</p>
                </div>
                <div className="primary__info-nosotros">
                    <h3>Nosotros</h3>
                    <ul>
                        <li>
                            <NavLink to='/acercaDe'>
                                <span>Colaboradores</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/participa'>
                                <span>Ayudanos</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='https://www.somosicfa.cl/' target="_blank">
                                <span>Nuestra iglesia</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="primary__info-contactanos">
                    <h3>Contáctanos</h3>
                    <ul>
                        <li>
                            <NavLink to='https://goo.gl/maps/eqUh71kusXcKYG5b9' target="_blank">
                                <img src={iconDirection} className="icon-footer"></img>
                                <span>Serrano Esquina Prat, Lota</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="mailto:somosicfaweb@gmail.com" target="_blank">
                                <img src={iconCorreo} className="icon-footer"></img>

                                <span>somosicfaweb@gmail.com</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="https://api.whatsapp.com/send?phone=56945282176&text=¡Hola! ¿Cómo estás?" target="_blank">
                                <img src={iconTelefono} className="icon-footer"></img>
                                <span>+569 5969 5315</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-secondary">
                <div className="secondary-copyright">
                    <NavLink to='https://github.com/ClaudiaVillagran' target="_blank">
                        <p>&copy; CreaVida | Powered by Claudia Villagrán</p>
                    </NavLink>
                </div>
                <div className="secondary-logo">
                    <img src={avatar} alt="Logo-CreaVida" className='footer__logo-CreaVida' />
                </div>
                <div className="secondary-rrss">
                    <ul>
                        <li>
                            <NavLink to="https://www.facebook.com/somosicfa/">
                                <span>Facebook</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="https://www.instagram.com/somosicfa/">
                                <span>Instagram</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="https://api.whatsapp.com/send?phone=56945282176&text=¡Hola! ¿Cómo estás?">
                                <span>Whatsapp</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
