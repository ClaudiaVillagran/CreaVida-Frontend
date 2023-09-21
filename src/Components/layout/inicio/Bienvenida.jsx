import { useEffect } from 'react';
import { Section } from '../../layout/inicio/Section';
export const Bienvenida = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    
    }, [])
    
    return (
        <>
            <div className="principal__container">
                <div className="fondo_semi_transparente">
                    <div className='content_bienvenida-tittle'>
                        <h1 className="content_bienvenida-tittle-1 ">Bienvenido a </h1>
                        <h1 className="content_bienvenida-tittle-2">CreaVida</h1>
                        <p className="content_bienvenida-tittle-p "><i>CreaVida en Chile: Impacto con amor y solidaridad. Únete donando o como voluntario.</i></p>

                    </div>
                </div>
            </div>
            <Section/>
        </>
    )
}
