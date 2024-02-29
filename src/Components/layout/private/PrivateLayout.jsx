import { useState, useEffect } from 'react';
import { Login } from './Login';
import { BienvenidaUser } from './BienvenidaUser';

export const PrivateLayout = () => {
  const [token, setToken] = useState(null); // Estado para almacenar el token

  useEffect(() => {
    // Obtener el token del localStorage
    const storedToken = localStorage.getItem('token');

    // Verificar si el token existe
    if (storedToken) {
      console.log('El token existe:', storedToken);
      setToken(storedToken); // Almacenar el token en el estado
      // Realizar acciones si el token existe, como cargar contenido privado
    } else {
      console.log('El token no existe');
      // Realizar acciones si el token no existe, como redirigir al usuario a la página de inicio de sesión
    }
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <main >
      {token ?
        <BienvenidaUser/>
        :
        <Login />
      }
    </main>
  );
};
