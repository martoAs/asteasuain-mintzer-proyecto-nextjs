"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavListDrawer} from './NavListDrawer';
import {useState} from 'react';

const navLinks = [
    {title: 'Home', path: '/', icon: <HomeIcon/>},
    {title: 'Tienda', path: '/store', icon: <StoreIcon/>},
    {title: 'Carrito', path: '/cart', icon: <ShoppingCartIcon/>},
];

export function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setOpen(true)}
                        sx={{display: {xs: "block", sm: "none"}}}
                        edge="start"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{display: {xs: "none", sm: "block"}}}>
                        {navLinks.map((item) => (
                            <Button
                                color="inherit"
                                key={item.title}
                                component="a"
                                href={item.path}
                                startIcon={item.icon}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {/* Puedes poner aquí un título o logo si lo deseas */}
                    </Typography>
                    <Button color="inherit">Log in</Button>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{display: {xs: "block", sm: "none"}}}
            >
                <NavListDrawer items={navLinks}/>
            </Drawer>
        </Box>
    );
}