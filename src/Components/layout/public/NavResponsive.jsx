import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { NavLink } from 'react-router-dom';

export const NavResponsive = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon sx={{ fontSize: '4.5rem', color: '#fff' }} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink to='/'  >
                            <span className='title__navbar'>Crea</span>
                            <span className='title__navbar-2'>Vida</span>
                        </NavLink>
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>

            {/* Drawer para el menú */}
            <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose} >
                <List className='menu__ul'  >

                    <NavLink to='/' >
                        <ListItem  onClick={handleDrawerClose} className='menu__li'>
                            <span  >Inicio</span>
                        </ListItem>
                    </NavLink>
                    <NavLink to='/acercaDe'>
                        <ListItem  onClick={handleDrawerClose} className='menu__li' >
                            <span  >Acerca de</span>
                        </ListItem>
                    </NavLink>
                    <NavLink to='/eventos'>
                        <ListItem onClick={handleDrawerClose} className='menu__li'>
                            <span>Eventos</span>
                        </ListItem>
                    </NavLink>
                    <NavLink to='/participa'>
                        <ListItem onClick={handleDrawerClose} className='menu__li'>
                            <span >Hazte miembro</span>
                        </ListItem>
                    </NavLink>
                </List>
            </Drawer>
        </Box>
    );
};
