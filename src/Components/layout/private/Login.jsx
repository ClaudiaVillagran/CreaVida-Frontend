import { IconButton } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Global } from '../../../Helpers/Global';


export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const loginInit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        const request = await fetch(Global.url + 'user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await request.json();

        if (data.status === 'success') {

            localStorage.setItem('token', data.token);
            console.log(data.token);
            console.log('Inicio de sesión exitoso');
            window.location.reload();

        }

    }
    return (

        <main className='main_privateLayout'>

            <article className='article_login'>
                <h1 className='title_login'>LOGIN</h1>
                <form className='form_login' onSubmit={loginInit}>

                    <input type="email"
                        name="email"
                        className='input_login'
                        placeholder="Email"
                        value={email}
                        onChange={handleChangeEmail}
                    />
                    <div className='container_password'>
                        <input type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={password}
                            onChange={handleChangePassword}
                            placeholder="Contraseña"
                            className='input_login pw' />
                        <div className='iconPassword'>
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </div>
                    </div>
                    <button className='button_login'>INGRESAR</button>
                </form>
            </article>
        </main>

    )
}
