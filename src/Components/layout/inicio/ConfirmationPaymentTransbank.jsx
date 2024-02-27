import axios from "axios";
import { useEffect, useState } from "react";
import agradecimiento from '../../../assets/img/MarcaFCV_transparente.png'
import { NavLink } from "react-router-dom";
export const ConfirmationPaymentTransbank = () => {
    const [token_ws, setToken] = useState("");
    const [loading, setLoading] = useState(true);
    const [aproved, setAproved] = useState(false);
    const [failed, setFailed] = useState(false);
    useEffect(() => {
        const fetchToken = async () => {
            // Obtener la cadena de búsqueda de la URL (ej. "?token_ws=...")
            const searchParams = new URLSearchParams(window.location.search);

            // Obtener el valor del parámetro "token_ws"
            const tokenValue = searchParams.get("token_ws");

            // Actualizar el estado con el valor del token
            setToken(tokenValue || "");
            setLoading(false); // Marcar la carga como completa
        };

        fetchToken();
    }, []);

    useEffect(() => {
        const confirmPayment = async () => {
            try {
                if (token_ws.length > 1) {
                    // Realizar la solicitud solo si hay un token
                    const response = await axios.post(
                        "https://backend.fcreavida.cl/api/payment/confirm-payment",
                        { token_ws }
                    );
                    console.log(response.data);
                    if (response.data.status === 'success') {
                        setAproved(true);
                    } else if (response.data.status === 'failed') {
                        setFailed(true);
                    }
                }
            } catch (error) {
                console.error("Error al confirmar transaccion:", error);
            }
        };

        confirmPayment();
    }, [token_ws]);

    if (loading) {
        return <p>Cargando...</p>; // Muestra un mensaje de carga mientras se realiza la operación asíncrona
    }

    return (
        <div className="webpay confirmation-webpay">
            {aproved ?
                <div className="container-agradecimiento">
                    <div className="container-img-agradecimiento">
                        <img src={agradecimiento} alt="" />
                    </div>
                    <h1>¡Gracias por tu apoyo!</h1>
                    <NavLink to={'/'} >
                        <button className="button-donar">Volver al inicio</button>
                    </NavLink>
                </div>

                : ''
            }
            {failed ?
                <div className="container-agradecimiento">
                    <div className="container-img-agradecimiento">
                        <img src={agradecimiento} alt="" />
                    </div>
                    <h1 className="container-agradecimiento-h1-failed">Al parecer no pudiste completar la transacción  &#x1F622; </h1>
                    <NavLink to={'/'} >
                        <button className="button-donar">Volver al inicio</button>
                    </NavLink>
                </div>
                : ''
            }
        </div>
    );
};
