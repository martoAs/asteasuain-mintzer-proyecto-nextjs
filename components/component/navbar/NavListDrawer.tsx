"use client";

import React from 'react';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import Box from '@mui/material/Box';

interface NavLinks {
    title: string;
    path: string;
    icon: React.ReactNode;
}

interface NavListDrawerProps {
    items: NavLinks[];
}

export function NavListDrawer({ items }: NavListDrawerProps) {
    return (
        <Box sx={{ width: 250 }}>
            <nav>
                <List>
                    {items.map((item: NavLinks) => (
                        <ListItem disablePadding key={item.title}>
                            <ListItemButton component="a" href={item.path}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    );
}