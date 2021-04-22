import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const StyledAppBar = styled(AppBar)`
    grid-area: ${({gridArea}) => gridArea};
    justify-content: center;
`;

const StyledToolbar = styled(Toolbar)`
    justify-content: space-between;
`;

const Header = ({ handleLogout, gridArea}) => {
    const [anchorEl, setAnchorEl ] = useState(null);
    const history = useHistory();

    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (route) => {
        setAnchorEl(null);

        route && history.push(route);
    }

    return (
        <StyledAppBar gridArea={gridArea} position="static">
            <StyledToolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    Chat App
                </Typography>
                {true && (
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => handleClose( 'profile' )}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Settings</MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    handleLogout();
                                }}
                            >
                                Logout
                            </MenuItem>
                        </Menu>
                    </div>
                )}
            </StyledToolbar>
        </StyledAppBar>
    )
}

Header.propTypes = {
    gridArea: PropTypes.string.isRequired,
    handleLogout: PropTypes.func.isRequired,
}

export default Header;