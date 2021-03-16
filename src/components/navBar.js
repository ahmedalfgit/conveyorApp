import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router';

//logos for header
import logo from '../assests/call-icon.png';
import convLogo from '../assests/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HeaderBar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorE1, setAnchorE1] = React.useState(null);
  const open = Boolean(anchorE1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorE1(null);
  };

  return (
    <AppBar position="static" className="navBar-bg no-shadow">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="conveyor-icon"
          onClick={() => handleMenuClick('/')}
        >
          <img className="w-50" src={convLogo} alt="Serpentix Conveyor logo"/>
        </IconButton>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              className={(classes.menuButton, 'toggleMenu')}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorE1={anchorE1}
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
              onClose={() => setAnchorE1(null)}
            >
              <MenuItem onClick={() => handleMenuClick('/sludge')}>
                Sludge
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick('/screenings')}>
                Screenings
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick('/biosolids')}>
                Biosolids
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick('/quote')}>
                Get A Quote
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick('/contact')}>
                Call Us
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button className="text-dark" onClick={() => handleMenuClick('/sludge')}>
              Sludge
            </Button>
            <Button className="text-dark" onClick={() => handleMenuClick('/screenings')}>
              Screenings
            </Button>
            <Button className="text-dark" onClick={() => handleMenuClick('/biosolids')}>
              Biosolids
            </Button>
            <Button className="text-dark" onClick={() => handleMenuClick('/quote')}>
              Get A Quote
            </Button> 
            <a href="tel:303-430-8427" className="call-us-btn">
               <img className="w-70" src={logo} alt="phone logo"/>
            </a>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(HeaderBar);
