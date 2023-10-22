import { Nav } from './Nav'
import avatar from '../../../assets/img/MarcaFCV_transparente.png'
import { useEffect, useState } from 'react';
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
        <div className="navbar__header">
          <img src={avatar} alt="Logo-CreaVida" className='navbar_logo-CreaVida logo' />
        </div>

        <Nav />
      </div>

    </header>
  )
}

