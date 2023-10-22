import { useParams } from "react-router-dom"
import { Global } from "../../../Helpers/Global";
import { useEffect, useState } from "react";
import img from '../../../assets/img/CONFERENCIA IDEOLOGÍA DE GÉNERO-01 (1).jpg'
export const Event = () => {
    const params = useParams();
    const eventId = params.id;
    const [event, setEvent] = useState({});
    const [modalOpenParticipe, setModalOpenParticipe] = useState(false);
    const [modalOpenDonate, setModalOpenDonate] = useState(false);
    const [formattedDate, setFormattedDate] = useState("")


    const participar = () => {
        setModalOpenParticipe(true);
    };
    const donar = () => {
        setModalOpenDonate(true);
    };
    const closeModal = () => {
        setModalOpenParticipe(false);
        setModalOpenDonate(false);
    };

    useEffect(() => {
        getEvent(eventId);
        window.scrollTo(0, 500);

    }, [])

    const getEvent = async () => {
        const request = await fetch(Global.url + 'event/getEvent/' + eventId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await request.json();
        if (data.status == 'success') {
            console.log('getEvents', data)
            setEvent(data.event)
            console.log(event)
            const eventDate = new Date(data.event.date);
            const day = eventDate.getDate();
            const month = eventDate.getMonth() + 1; // Los meses comienzan desde 0
            const year = eventDate.getFullYear();
            const formatDate = `${day}-${month}-${year}`;
            setFormattedDate(formatDate)
            console.log(formatDate)
        }

    }
    return (
        <div className="container__specific-event">

            {modalOpenParticipe && (
                <div className="modal">
                    <div className="participation-box">

                        <span className="modal__close" onClick={closeModal}>&times;</span>

                        <h6>Gracias por querer ser parte</h6>
                        <form className="form__participate">
                            <div className="input-box" >
                                <input type="text" id="nombre" name="nombre" required />
                                <label htmlFor="nombre" >Nombre:</label>
                            </div>
                            <div className="input-box" >
                                <input type="text" id="apellido" name="apellido" required />
                                <label htmlFor="apellido" >Apellido:</label>
                            </div>

                            <div className="input-box" >

                                <input type="text" id="edad" name="edad" required />
                                <label htmlFor="edad" >Edad:</label>
                            </div>

                            <div className="input-box" >
                                <input type="text" id="contacto" name="contacto" required />
                                <label htmlFor="contacto" >Contacto:</label>
                            </div>

                            <div className="input-box" >
                                <textarea id="mensaje" name="mensaje" rows="2" required></textarea>
                                <label htmlFor="mensaje" >Mensaje:</label>
                            </div>
                            <div className="buttons-form">
                                <button type="submit" className="button-submit">Enviar</button>
                                <button className="button-close" onClick={closeModal}>Cerrar</button>
                            </div>

                        </form>


                    </div>
                </div>
            )}
            {modalOpenDonate && (
                <div className="modal">
                    <div className="participation-box">
                        <span className="modal__close " onClick={closeModal}>&times;</span>

                        <h6 className="donate-h6">Gracias por querer ser parte</h6>
                        <p className="method_donation"><i>Selecciona el método para donar</i></p>
                        <div className="options-donate">
                            <button className="button-donate">Transferencia</button>
                            <button className="button-donate">WebPay</button>
                            <button className="button-donate">PayPal</button>
                        </div>

                    </div>
                </div>
            )}
            <div className="background-black">

                <div className="container-description">
                    <div className="container-img">
                        <img src={img} alt="img-event" className="img-event" />
                    </div>
                    <h2 className="title-event">{event.title}</h2>
                    <p className="frase-motivadora">Frase motivadora</p>
                    <div className="specific-description">
                        <p className="first-description"  >{formattedDate}</p>
                        <p className="second-description">{'aqui va la ubicacion' + event.location}</p>
                        <div className="buttons-description last-description">
                            <button className="button-donar description-donar " onClick={donar}>Donar</button>

                        </div>
                    </div>
                </div>


            </div>
            <div className="background-white">

            </div>
            <div className="background-white-secondpart">
                <p>{event.description + 'Aqui va la descrdasdañlkd asñkdOASDOASDASDSDAJS skladjasdlj dasjsajasd  asdkasdjasdl  dasjlKASDOÁSKDOKASipcion del evento'}</p>
                <div className="buttons-event">
                    <button className="button-donar donar-description" onClick={donar}>Donar</button>
                    <button className="button-participar participar-description" onClick={participar}>Participar</button>
                </div>
            </div>

        </div>
    )
}
