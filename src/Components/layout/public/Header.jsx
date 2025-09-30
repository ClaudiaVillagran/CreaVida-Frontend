// src/Components/ui/header/Header.jsx
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import avatar from '../../../assets/img/MarcaFCV_transparente.png';
import '../../../assets/css/header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggle = (val) => () => setOpen(val);

  const navItems = [
    { to: '/', label: 'Inicio' },
    { to: '/acercaDe', label: 'Acerca de' },
    { to: '/eventos', label: 'Eventos' },
  ];

  return (
    <header className={`layout__navbar ${isScrolled ? 'is-scrolled' : ''}`} role="banner">
      <div className="container__header">
        {/* IZQUIERDA: hamburguesa (solo móvil) + logo */}
        <div className="left">
          <IconButton
            aria-label="Abrir menú"
            onClick={toggle(true)}
            className="mobile-toggle"
            size="large"
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>

          <NavLink to="/" className="brand" aria-label="Ir al inicio">
            <img className="navbar_logo-CreaVida" src={avatar} alt="CreaVida" loading="eager" />
          </NavLink>
        </div>

        {/* CENTRO: navegación desktop */}
        <nav className="center" aria-label="Navegación principal">
          <ul className="nav__list">
            {navItems.map(({ to, label }) => (
              <li key={to} className="nav__item">
                <NavLink
                  to={to}
                  className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* DERECHA: CTA (SIEMPRE visible) */}
        <div className="right">
          <button className="button-header" onClick={() => navigate('/participa')}>
            HAZTE MIEMBRO
          </button>
        </div>
      </div>

      {/* DRAWER (móvil) */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggle(false)}
        PaperProps={{
          sx: {
            width: { xs: '86vw', sm: 360 },
            backgroundColor: '#fff',
            color: '#1e1e1e',
            borderRight: '1px solid rgba(0,0,0,.08)',
          },
        }}
      >
        <Box sx={{ p: 2, pb: 1 }}>
          <NavLink to="/" onClick={toggle(false)} className="drawer__brand">
            <img className="navbar_logo-CreaVida" src={avatar} alt="CreaVida" />
          </NavLink>
        </Box>

        <Divider />

        <List disablePadding sx={{ p: 1 }}>
          {navItems.map(({ to, label }) => (
            <ListItemButton
              key={to}
              component={NavLink}
              to={to}
              onClick={toggle(false)}
              className="drawer__link"
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{ sx: { color: '#1e1e1e', fontWeight: 700, letterSpacing: .2 } }}
              />
            </ListItemButton>
          ))}
        </List>

        <Divider sx={{ my: 1 }} />

        <Box sx={{ p: 2, pt: 1 }}>
          <Button
            fullWidth
            component={NavLink}
            to="/participa"
            onClick={toggle(false)}
            className="drawer__cta"
          >
            HAZTE MIEMBRO
          </Button>
        </Box>
      </Drawer>
    </header>
  );
};
