import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthProvider';
import { PublicLayout } from '../Components/layout/public/PublicLayout';
import { PrivateLayout } from '../Components/layout/private/PrivateLayout';
import { Section } from '../Components/layout/inicio/Section';
import { Donar } from '../Components/layout/donar/Donar';

export const Routing = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<PublicLayout />}>
                         <Route index element={<Section />} />
                        <Route path='donar' element={<Donar />} />
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
