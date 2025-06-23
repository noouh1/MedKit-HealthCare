import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Button, AppBar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
    { label: 'Home', path: '/home' },
    { label: 'Find a doctor', path: '/find-a-doctor' },
    { label: 'About us', path: '/about-us' },
    { label: 'Client zone', path: '/client-zone' },
];

function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                borderBottom: 'none',
                width: '100%',
                p: 0,
            }}
        >
            <Toolbar
                disableGutters
                sx={{
                    px: { xs: 2, sm: 4, md: 10 },
                    minHeight: { xs: 56, sm: 64 },
                    background: '#1e6c72',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    boxShadow: '0 6px 24px 0 rgba(30,108,114,0.5)',
                }}
            >
                {/* Logo */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: { xs: 20, sm: 22 },
                        letterSpacing: 0.5,
                        flexShrink: 0,
                        ml: { xs: 0, sm: 2, md: 15 },
                    }}
                >
                    MedKit
                </Typography>
                {/* Desktop Navigation */}
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        ml: 'auto',
                        borderRadius: 0,
                        height: 64,
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: 900,
                        pr: 0,
                        zIndex: 1,
                        justifyContent: 'flex-end',
                    }}
                >
                    {pages.map((page, idx) => (
                        <Button
                            key={page.label}
                            component={Link}
                            to={page.path}
                            sx={{
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: 16,
                                textTransform: 'none',
                                mx: 1.5,
                                px: 2.5,
                                border: idx === pages.length - 1 ? '1.5px solid #fff' : 'none',
                                borderRadius: idx === pages.length - 1 ? '22px' : 0,
                                background: 'transparent',
                                '&:hover': {
                                    background: idx === pages.length - 1 ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.10)',
                                    borderColor: idx === pages.length - 1 ? '#fff' : 'none',
                                },
                            }}
                        >
                            {page.label}
                        </Button>
                    ))}
                </Box>
                {/* Mobile Menu Icon */}
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setDrawerOpen(true)}
                    sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}
                >
                    <MenuIcon sx={{ fontSize: 32, color: 'white' }} />
                </IconButton>
                {/* Drawer for mobile */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    PaperProps={{
                        sx: { width: 220, pt: 2, background: '#2d6c76' },
                    }}
                >
                    <List>
                        {pages.map((page, idx) => (
                            <ListItem key={page.label} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={page.path}
                                    onClick={() => setDrawerOpen(false)}
                                    sx={{
                                        color: '#fff',
                                        fontWeight: 600,
                                        fontSize: 16,
                                        border: idx === pages.length - 1 ? '1.5px solid #fff' : 'none',
                                        borderRadius: idx === pages.length - 1 ? '22px' : 0,
                                        my: 0.5,
                                        mx: 1,
                                        justifyContent: 'center',
                                    }}
                                >
                                    <ListItemText
                                        primary={page.label}
                                        primaryTypographyProps={{
                                            fontWeight: 600,
                                            color: '#fff',
                                            fontSize: 16,
                                            textAlign: 'center',
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;