// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import classNames from 'classnames';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import SideBar from './SideBar';

// Local Components
import ButtonCustom from './ButtonCustom';
import Panel from './Panel';

// Local Assets
import Logo from '../assets/images/white-logo.svg';
import * as colors from '../assets/jss/colors';

//  Style Overrides
const styles = theme => ({
  root: {
    alignItems: 'center',
    minHeight: '70px',
    [theme.breakpoints.up('sm')]: {
      minHeight: '90px',
    },
  },
  logoContainer: {
    color: 'white',
    alignItems: 'center',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  menuButton: {
    color: 'white',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navlinks: {
    color: 'white',
    display: 'none',
    marginRight: '60px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
  },
  navlink: {
    paddingRight: '15px',
    borderRight: '1px solid white',
    marginRight: '15px',
    cursor: 'pointer',
  },
  navlinksContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  logo: {
    width: '75px',
  },
  logoText: {
    marginLeft: '15px',
  },
  signUp: {
    marginLeft: '20px',
  },
  login: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 500,
    letterSpacing: '2px',
    cursor: 'pointer',
  },
});

class Header extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, backgroundColor } = this.props;
    const { mobileOpen } = this.state;
    const color = backgroundColor;
    return (
      <Panel backgroundColor={color}>
        <Grid container className={classes.root} justify="space-between">
          <Grid item className={classes.menuButton}>
            <IconButton color="inherit" aria-label="Menu" onClick={this.handleDrawerToggle}>
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </Grid>
          <Link prefetch href="/">
            <Grid item className={classes.logoContainer}>
              <img src={Logo} className={classes.logo} alt="logo" />
              <Typography variant="overline" color="inherit" className={classes.logoText}>
                Synapse Prep
              </Typography>
            </Grid>
          </Link>

          <Grid item className={classes.navItems}>
            <Grid item className={classes.navlinks}>
              <Grid item>
                <Link prefetch href="/Sat">
                  <Typography
                    variant="h6"
                    align="center"
                    className={classes.navlink}
                    color="inherit"
                  >
                    SAT
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link prefetch href="/Act">
                  <Typography
                    variant="h6"
                    align="center"
                    className={classes.navlink}
                    color="inherit"
                  >
                    ACT
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link prefetch href="/School-tutoring">
                  <Typography variant="h6" align="center" color="inherit">
                    Academic Tutoring
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <div className={classes.navlinksContainer}>
              <Link prefetch href="./login">
                <Typography component="a" variant="body1" className={classes.login}>
                  Log in
                </Typography>
              </Link>
              <Link prefetch href="./register">
                <ButtonCustom color="green" className={classes.signUp}>
                  Sign Up
                </ButtonCustom>
              </Link>
            </div>
          </Grid>
        </Grid>
        <SideBar handleDrawerToggle={this.handleDrawerToggle} mobileOpen={mobileOpen} />
      </Panel>
    );
  }
}

export default withStyles(styles)(Header);
