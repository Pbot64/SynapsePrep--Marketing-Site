// Node Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import classNames from "classnames";

// Local Components
import ButtonCustom from "./ButtonCustom";
import Panel from "./Panel";
import SideBar from "./SideBar";

// Material UI Components
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

// Local Assets
import Logo from "../static/images/white-logo.svg";
import * as colors from "./common/colors";

//  Style Overrides
const styles = theme => ({
  root: {
    alignItems: "center",
    minHeight: "60px",
    [theme.breakpoints.up("sm")]: {
      minHeight: "70px"
    }
  },
  logoContainer: {
    color: "white",
    alignItems: "center",
    display: "none",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8"
    },
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  menuButton: {
    color: "white",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  navlinks: {
    color: "white",
    display: "none",
    marginRight: "60px",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  navItems: {
    display: "flex",
    alignItems: "center"
  },
  navlink: {
    fontWeight: "500",
    paddingRight: "15px",
    borderRight: "1px solid white",
    marginRight: "15px",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8"
    }
  },
  link: {
    textDecoration: "none"
  },
  navlinkLast: {
    fontWeight: "500",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8"
    }
  },
  navlinksContainer: {
    alignItems: "center",
    display: "flex"
  },
  logo: {
    width: "60px"
  },
  logoText: {
    marginLeft: "15px"
  },
  signUp: {
    marginLeft: "20px"
  },
  login: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: 500,
    letterSpacing: "1.5px",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8"
    }
  }
});

class Header extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, backgroundColor, ...rest } = this.props;
    const { mobileOpen } = this.state;
    return (
      <Panel backgroundColor={backgroundColor} {...rest}>
        <Grid container className={classes.root} justify="space-between">
          <Grid item className={classes.menuButton}>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </Grid>
          <Link href="/">
            <Grid item className={classes.logoContainer}>
              <img src={Logo} className={classes.logo} alt="logo" />
              <Typography
                variant="overline"
                color="inherit"
                className={classes.logoText}
              >
                Synapse Prep
              </Typography>
            </Grid>
          </Link>

          <Grid item className={classes.navItems}>
            <Grid item className={classes.navlinks}>
              <Grid item>
                <Link href="/sat">
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.navlink}
                    color="inherit"
                  >
                    SAT
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/act">
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.navlink}
                    color="inherit"
                  >
                    ACT
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/academic">
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.navlinkLast}
                    color="inherit"
                  >
                    Academic Tutoring
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <div className={classes.navlinksContainer}>
              <a
                className={classes.link}
                href="https://app.synapseprep.net/login"
              >
                <Typography variant="body1" className={classes.login}>
                  Log in
                </Typography>
              </a>
              <a
                className={classes.link}
                href="https://app.synapseprep.net/register"
              >
                <ButtonCustom color="green" className={classes.signUp}>
                  Sign Up
                </ButtonCustom>
              </a>
            </div>
          </Grid>
        </Grid>
        <SideBar
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      </Panel>
    );
  }
}

export default withStyles(styles)(Header);
