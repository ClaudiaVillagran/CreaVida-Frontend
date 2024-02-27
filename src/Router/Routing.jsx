import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthProvider';
import { PublicLayout } from '../Components/layout/public/PublicLayout';
import { PrivateLayout } from '../Components/layout/private/PrivateLayout';

import { Donar } from '../Components/layout/donar/Donar';
import { Events } from '../Components/layout/inicio/Events';
import { Participar } from '../Components/layout/participar/Participar';
import { AcercaDe } from '../Components/layout/acercaDe/AcercaDe';
import { Bienvenida } from '../Components/layout/inicio/Bienvenida';
import { Event } from '../Components/layout/participar/Event';
import { EventPast } from '../Components/layout/participar/EventPast';
import { ConfirmationPaymentTransbank } from '../Components/layout/inicio/ConfirmationPaymentTransbank';
import {RegisterEvent } from '../Components/layout/inicio/RegisterEvent'

export const Routing = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<PublicLayout />}>
                        <Route index element={<Bienvenida />} />
                        <Route path='donar/:id' element={<Donar />} />
                        <Route path='participa' element={<Participar />} />
                        <Route path='eventos' element={<Events />} />
                        <Route path='acercaDe' element={<AcercaDe />} />
                        <Route path='event/:id' element={<Event/>}/>
                        <Route path='eventPast/:id' element={<EventPast/>}/>
                        <Route path='confirmation-payment/*' element={<ConfirmationPaymentTransbank />} />
                        <Route path='ud12j1321j' element={<RegisterEvent/>} />
                        {/* <Route path='registro' element={<Register />} /> */}
                    </Route>

                    <Route path='/admin' element={<PrivateLayout />}>
                        {/* <Route index element={<Feed />} /> */}
                    </Route>

                    <Route path='*' element={
                        <>
                            <p>
                                <h1 className='ERROR_404'>ERROR 404</h1>
                                <Link to='/'>Volver al inicio</Link>
                            </p>
                        </>
                    }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
