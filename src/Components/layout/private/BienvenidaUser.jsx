import { useEffect, useState } from "react";
import { Global } from "../../../Helpers/Global";
import { VirtualAssistant } from "./VirtualAssistant";
import { TextBienvenida } from "./TextBienvenida";

import iconDown from '../../../assets/icons/down.png';

export const BienvenidaUser = () => {
    const [user, setUser] = useState({});
    const [totalTime, setTotalTime] = useState();
    const [isComplete, setIsComplete] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [showHand, setShowHand] = useState(false);
    const [buttonBeingHovered, setButtonBeingHovered] = useState('');

    const getUserData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const response = await fetch(Global.url + `user/findUser/${token}`, {
                    method: 'GET'
                });
                const data = await response.json();
                if (data) {
                    setUser(data);
                }
            } else {
                console.error('No se encontró ningún token en el localStorage');
            }
        } catch (error) {
            console.error('Error al obtener los datos del usuario:', error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);
    useEffect(() => {
        if (isComplete) {
            const firstButtonTimer = setTimeout(() => {
                setShowButtons(true);
                const secondButtonTimer = setTimeout(() => {
                    setShowButtons(true);
                }, 1000); // Espera 5 segundos antes de mostrar el segundo botón
                return () => clearTimeout(secondButtonTimer);
            }, 500); // Espera 5 segundos antes de mostrar el primer botón
            return () => clearTimeout(firstButtonTimer);
        }
    }, [isComplete]);

    const handleMouseEnter = (buttonType) => {
        setShowHand(true);
        setButtonBeingHovered(buttonType);
    };

    const handleMouseLeave = () => {
        setShowHand(false);
        setButtonBeingHovered('');
    };

    return (
        <section className="section_bienvenidaUser">
            {user ?
                <>
                    <div className="container_robot">
                        <VirtualAssistant isComplete={isComplete} />
                        <TextBienvenida
                            totalTime={totalTime}
                            setTotalTime={setTotalTime}
                            setIsComplete={setIsComplete}
                            isComplete={isComplete}
                        />
                    </div>

                    <div className="container_buttons">
                        {isComplete && showButtons && (
                            <>
                                <div className="containerhand">
                                    <div className={`hand-icon ${showHand && buttonBeingHovered === 'Registrar' ? 'visible' : ''}`}>
                                        <img src={iconDown} alt="Icono de mano" className="iconDown" />
                                    </div>
                                    <div className="button-wrapper">
                                        <button
                                            className="button_welcome button_animation"
                                            onMouseEnter={() => handleMouseEnter('Registrar')}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            Registrar un evento
                                        </button>
                                    </div>
                                </div>
                                <div className="containerhand">
                                    <div className={`hand-icon ${showHand && buttonBeingHovered === 'Ver' ? 'visible' : ''}`}>
                                        <img src={iconDown} alt="Icono de mano" className="iconDown" />
                                    </div>
                                    <div className="button-wrapper">
                                        <button
                                            className="button_welcome button_animation"
                                            onMouseEnter={() => handleMouseEnter('Ver')}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            Ver eventos
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </>
                : <h1>Cargando...</h1>}
        </section>
    );
};
