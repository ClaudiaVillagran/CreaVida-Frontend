import { useEffect, useState } from 'react';
import { Section } from '../../layout/inicio/Section';
import imgLogo from '../../../assets/img/MarcaFCV_transparente.png'
import imgSolidaridad from '../../../assets/img/caridad2.png'
import { NavLink } from 'react-router-dom';

export const Bienvenida = () => {




    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    return (
        <>
            <div className="principal__container">
                <div className='presentation__inicio'>
                    <h1 className='presentation__tittle'>Fundación CreaVida</h1>
                    <div className='presentation__logo'>
                        <img src={imgLogo} alt="logo" />
                    </div>
                    <div>
                    <p className='presentation__description-first'>"Impacto con amor y solidaridad."</p>
                    <p className='presentation__description'>Únete donando o como voluntario</p>
                    </div>
                    
                    <NavLink to={"/participa"}>
                        <button className="button-donar donar-description presentation-button" >Ir a donar</button>
                    </NavLink>
                </div>
                <div className="background__solidaridad">
                    <img src={imgSolidaridad} alt="background__solidaridad" />
                </div>
            </div>
            <Section />
        </>
    )
}
