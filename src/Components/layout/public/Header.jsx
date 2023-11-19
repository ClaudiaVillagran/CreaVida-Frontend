
import avatar from '../../../assets/img/MarcaFCV_transparente.png'
import { useEffect, useState } from 'react';
import { NavResponsive } from './NavResponsive';
export const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <header className={`layout__navbar  ${scrolling ? 'scrolled' : ''}`}>

      <div className='container__header'>

        <NavResponsive />
        <button className="button-header">HAZTE MIEMBRO</button>
        <div className="navbar__header">
          <img src={avatar} alt="Logo-CreaVida" className='navbar_logo-CreaVida logo' />
        </div>

      </div>
    </header>
  )
}

