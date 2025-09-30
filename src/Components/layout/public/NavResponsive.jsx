import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export const NavResponsive = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const linkSx = {
    borderRadius: 1,
    px: 1,
    '&:hover': { backgroundColor: 'rgba(96,173,38,.10)' },
    '&.active': {
      backgroundColor: 'rgba(96,173,38,.18)',
      color: '#fff'
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#000',
          boxShadow: 'none',
          height: '64px',
          display: { xs: 'flex', lg: 'none' } // solo móvil/tablet
        }}
      >
        <Toolbar sx={{ minHeight: '64px !important' }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="Abrir menú"
            sx={{ mr: 1, color: '#fff' }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon sx={{ fontSize: '2rem' }} />
          </IconButton>

          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              lineHeight: 1,
              userSelect: 'none'
            }}
          >
            <NavLink to="/" style={{ display: 'inline-flex', alignItems: 'baseline', gap: 4 }}>
              <span className="title__navbar">Crea</span>
              <span className="title__navbar-2">Vida</span>
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            width: { xs: '86vw', sm: 360 },
            backgroundColor: '#111',
            color: '#e9e9e9',
            borderRight: '1px solid rgba(255,255,255,.08)'
          }
        }}
      >
        <Box sx={{ p: 2, pb: 1 }}>
          <Typography sx={{ fontSize: 18, opacity: .8 }}>
            Menú
          </Typography>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,.08)' }} />

        <List disablePadding sx={{ p: 1 }}>
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/"
              onClick={handleDrawerClose}
              className="menu__li"
              sx={linkSx}
            >
              <ListItemText primary="Inicio"
                primaryTypographyProps={{ fontWeight: 700 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/acercaDe"
              onClick={handleDrawerClose}
              className="menu__li"
              sx={linkSx}
            >
              <ListItemText primary="Acerca de"
                primaryTypographyProps={{ fontWeight: 700 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/eventos"
              onClick={handleDrawerClose}
              className="menu__li"
              sx={linkSx}
            >
              <ListItemText primary="Eventos"
                primaryTypographyProps={{ fontWeight: 700 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/participa"
              onClick={handleDrawerClose}
              className="menu__li"
              sx={linkSx}
            >
              <ListItemText primary="Hazte miembro"
                primaryTypographyProps={{ fontWeight: 700 }}
              />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,.08)' }} />

        {/* CTA dentro del drawer */}
        <Box sx={{ p: 2 }}>
          <Button
            fullWidth
            component={NavLink}
            to="/participa"
            onClick={handleDrawerClose}
            sx={{
              backgroundColor: '#60AD26',
              color: '#fff',
              fontWeight: 800,
              borderRadius: 999,
              textTransform: 'none',
              boxShadow: '0 8px 26px rgba(96,173,38,.34)',
              '&:hover': { backgroundColor: '#529221' }
            }}
          >
            HAZTE MIEMBRO
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};
