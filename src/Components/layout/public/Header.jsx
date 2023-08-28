import { Nav } from './Nav'
import avatar from '../../../assets/img/MarcaFCV_transparente.png'
export const Header = () => {
  return (
    <header className="layout__navbar">

      <div className="navbar__header">
        <img src={avatar} alt="Logo-CreaVida" className='navbar_logo-CreaVida' />
      </div>

      <Nav />
    </header>
  )
}

