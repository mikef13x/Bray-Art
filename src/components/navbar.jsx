import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';


import { Link } from 'react-router-dom'


const pages = ['Home','About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" sx={{
           background: 'linear-gradient(90deg,rgb(33, 33, 33) 0%,rgb(17, 17, 17) 85%,rgb(37, 37, 37) 100%)'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                      BW
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    component={Link}
                                    to={
                                        page === "Services" ? '/services' :
                                        page === "About" ? '/about' :
                                        page === "Login" ? '/login' :
                                        '#'
                                    }
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                              <MenuItem
                                component={Link}
                                to="/login"
                                onClick={handleCloseNavMenu}
                            >
                                <Typography sx={{ textAlign: 'center' }}>Login</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        to='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            marginRight: '40px'
                        }}
                    >
                    BW
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                component={Link}
                                to={
                                    page === "Services" ? '/services' :
                                    page === "About" ? '/about' :
                                   
                                    '#'
                                }
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >

                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            component={Link}
                            to="/login"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Login
                        </Button>
                        </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

